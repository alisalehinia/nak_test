/** @jsxImportSource @emotion/react */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserEntity } from "../types/user";
import { useUserStore } from "../store/userStore";
import { useNavigate, useParams } from "react-router-dom";
import { css } from "@emotion/react";

const schema: yup.ObjectSchema<UserEntity> = yup.object().shape({
  id: yup.string().optional(),
  name: yup.string().required("Name is required"),
  userName: yup
    .string()
    .required("User Name is required")
    .min(6, "User Name must be at least 6 characters")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/,
      "Username must be a mix of letters and numbers"
    ),
  email: yup.string().required("Email is required").email("Invalid email"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must be at least 10 digits")
    .matches(/^\d+$/, "Phone number must contain only digits"),
  status: yup
    .string()
    .oneOf(["active", "not_active"], "Invalid status")
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .optional()
    .nullable(),
});

interface UserFormProps {
  user?: UserEntity;
}

const formContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
`;

const formFieldsContainer = css`
  border: 1px solid var(--color-border-tertiary, #e6e6e6);
  box-shadow: 0px 4px 22px 0px #0000000a;
  border-radius: 24px;
  padding: 20px;
  background-color: #fff;
`;

const fieldRow = css`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const field = css`
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  max-width: calc(calc(100% - 190px) / 3);
  @media (max-width: 768px) {
    max-width: calc(100% - 48px);
    width: 100% !important;
    flex-grow: 1;
  }
  margin: 24px;
  margin-bottom: 12px;
  label {
    margin-bottom: 5px;
    font-weight: bold;
    &:after {
      content: "*";
      color: red;
      margin-left: 2px;
    }
  }
  input,
  select {
    height: 33px;
    border: 1px solid var(--color-border-primary, #ababab);
    padding: 4px;
    border-radius: 8px;
  }
`;

const statusField = css`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  margin: 24px;
  max-width: 415px;
  label {
    margin-bottom: 5px;
  }
  select {
    border-color: var(--color-border-primary, #ababab);
    padding: 4px;
    border-radius: 5px;
    height: 33px;
    option {
      padding: 8px;
      border: 1px solid var(--color-border-tertiary, #e6e6e6);
      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
`;

const divider = css`
  width: 100%;
  height: 1px;
  background-color: var(--color-border-tertiary, #e6e6e6);
  margin: 20px 0;
`;

const buttonContainer = css`
  display: flex;
  justify-content: flex-end;
  border: 1px solid var(--color-border-tertiary, #e6e6e6);
  box-shadow: 0px 4px 22px 0px #0000000a;
  border-radius: 24px;
  padding: 20px;
  background-color: #fff;
  margin-top: 20px;
`;

const submitButton = css`
  padding: 10px 20px;
  background-color: #242424;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const errorMessage = css`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const UserForm: React.FC<UserFormProps> = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<UserEntity>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: user || {},
  });
  const { addUser, updateUser, users } = useUserStore();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const getNextUserId = () => {
    return `${users.length + 1}`;
  };

  const onSubmit: SubmitHandler<UserEntity> = (data) => {
    if (id !== undefined) {
      updateUser(id, data);
    } else {
      const newUser = { ...data, id: getNextUserId() };
      addUser(newUser);
    }
    navigate("/list-item");
  };

  return (
    <div css={formContainer}>
      <div css={formFieldsContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div css={fieldRow}>
            <div css={field}>
              <label>Name</label>
              <input {...register("name")} />
              {errors.name && (
                <span css={errorMessage}>{errors.name.message}</span>
              )}
            </div>
            <div css={field}>
              <label>User Name</label>
              <input {...register("userName")} />
              {errors.userName && (
                <span css={errorMessage}>{errors.userName.message}</span>
              )}
            </div>
            <div css={field}>
              <label>Email</label>
              <input {...register("email")} />
              {errors.email && (
                <span css={errorMessage}>{errors.email.message}</span>
              )}
            </div>
          </div>
          <div css={field}>
            <label>Phone</label>
            <input {...register("phone")} />
            {errors.phone && (
              <span css={errorMessage}>{errors.phone.message}</span>
            )}
          </div>
          <div css={divider}></div>
          <div css={statusField}>
            <label>Status</label>
            <select {...register("status")}>
              <option value="">Select status</option>
              <option value="active">Active</option>
              <option value="not_active">Not Active</option>
            </select>
            {errors.status && (
              <span css={errorMessage}>{errors.status.message}</span>
            )}
          </div>
          <div css={buttonContainer}>
            <button type="submit" disabled={!isValid} css={submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
