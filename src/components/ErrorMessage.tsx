import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div
      className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3"
      role="alert"
      aria-live="assertive"
    >
      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-red-800 dark:text-red-300 mb-1">
          خطا در ارتباط
        </h3>
        <p className="text-sm text-red-700 dark:text-red-400">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
