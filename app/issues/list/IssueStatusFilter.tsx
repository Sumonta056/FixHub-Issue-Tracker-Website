'use client'
import { Select } from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation';

const statuses: { label: string, value: string }[] = [
    { label: 'All', value: 'ALL' },
    { label: 'Open', value: 'OPEN' },
    { label: 'Closed', value: 'DONE' },
    { label: 'In Progress', value: 'IN_PROGRESS' }
]

const IssueStatusFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    return (
        <>
            <Select.Root
                size="3"
                defaultValue={searchParams.get('status') || ''}
                onValueChange={(status) => {
                    const params = new URLSearchParams();
                    if (status && status !== 'ALL') params.append('status', status);
                    if (searchParams.get('orderBy'))
                        params.append('orderBy', searchParams.get('orderBy')!);
                
                    const query = params.size ? '?' + params.toString() : '';
                    router.push('/issues/list' + query);
                }} >
                <Select.Trigger placeholder='Filter by status ....' variant="classic"  color="red"/>
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