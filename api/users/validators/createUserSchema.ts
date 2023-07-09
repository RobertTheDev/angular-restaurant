import * as z from 'zod';

const createUserSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email('Email Address must be a valid email format'),
  firstName: z.string({
    required_error: 'First name is required',
    invalid_type_error: 'First name must be a string',
  }),
  lastName: z.string({
    required_error: 'First name is required',
    invalid_type_error: 'First name must be a string',
  }),
});

export default createUserSchema;
