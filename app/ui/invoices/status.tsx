import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx'; // clsx is a library that lets you toggle class names easily. We recommend taking a look at documentation for more details, but here's the basic usage:

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
            // Suppose that you want to create an InvoiceStatus component which accepts status. The status can be 'pending' or 'paid'.
            // 假设您要创建一个接受 status 的 InvoiceStatus 组件。状态可以是 'pending' 或 'paid' 。
            // If it's 'paid', you want the color to be green. If it's 'pending', you want the color to be gray.
            // 如果是 'paid' ，则颜色为绿色。如果是 'pending' ，则颜色为灰色。
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
