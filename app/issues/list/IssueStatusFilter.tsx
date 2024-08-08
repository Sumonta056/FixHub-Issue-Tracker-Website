'use client'
import { Select } from '@radix-ui/themes'
import { useRouter } from 'next/navigation';

const statuses: { label: string, value: string }[] = [
    { label: 'All', value: 'ALL' },
    { label: 'Open', value: 'OPEN' },
    { label: 'Closed', value: 'DONE' },
    { label: 'In Progress', value: 'IN_PROGRESS' }
]

const IssueStatusFilter = () => {
    const router = useRouter();

    return (
        <>
            <Select.Root
                onValueChange={(status) => {
                    const query = status === 'ALL' ? '' : `?status=${status}`;
                    router.push('/issues/list' + query);
                }}>
                <Select.Trigger placeholder='Filter by status ....' />
                <Select.Content>
                    {statuses.map(status => (
                        <Select.Item key={status.value} value={status.value}>
                            {status.label}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>
        </>
    )
}

export default IssueStatusFilter