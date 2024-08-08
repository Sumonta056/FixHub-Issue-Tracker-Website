'use client'
import { Flex, Text, Button } from '@radix-ui/themes';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

interface Props {
    itemCount: number;
    pageSize: number;
    currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount <= 1) return null;

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        router.push('?' + params.toString());
    }

    return (
        <Flex align="center" gap="3">
            <Text size="2">Page {currentPage} of {pageCount}</Text>
            <Button color='red' variant='soft' disabled={currentPage === 1}
                onClick={
                    () => changePage(currentPage - 1)
                }>
                <FaChevronLeft />
            </Button>
            <Button color='red' variant='soft' disabled={currentPage === pageCount}
                onClick={
                    () => changePage(currentPage + 1)
                }>
                <FaChevronRight />
            </Button>
        </Flex>
    )
}

export default Pagination