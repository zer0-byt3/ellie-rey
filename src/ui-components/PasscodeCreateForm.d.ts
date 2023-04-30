/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PasscodeCreateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type PasscodeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PasscodeCreateFormOverridesProps = {
    PasscodeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PasscodeCreateFormProps = React.PropsWithChildren<{
    overrides?: PasscodeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PasscodeCreateFormInputValues) => PasscodeCreateFormInputValues;
    onSuccess?: (fields: PasscodeCreateFormInputValues) => void;
    onError?: (fields: PasscodeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PasscodeCreateFormInputValues) => PasscodeCreateFormInputValues;
    onValidate?: PasscodeCreateFormValidationValues;
} & React.CSSProperties>;
export default function PasscodeCreateForm(props: PasscodeCreateFormProps): React.ReactElement;
