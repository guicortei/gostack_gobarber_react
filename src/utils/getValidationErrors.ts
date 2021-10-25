import { ValidationError } from 'yup';

interface UnformErrorsType {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError,
): UnformErrorsType {
  const validationErrors: UnformErrorsType = {};

  err.inner.forEach(error => {
    validationErrors[error.path as string] = error.message;
  });

  return validationErrors;
}
