"use client";

import React, {  } from 'react';
import Form from 'next/form';
import SearchFormReset from '@/components/searchForm/SearchFormReset';
import { SearchIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation'


function SearchForm({ mini } : {  mini?:boolean }) {

  const searchParams = useSearchParams()
  const query = searchParams.get('search')

  return (
    <>
    <Form action="/" scroll={false} className={`${mini ? 'mini-search-form' : 'search-form'} flex-grow`}>
      <input
          name="query"
          defaultValue={query ?? '' }
          className={`${mini ? 'mini-search-input' : 'search-input'} w-full`}
          placeholder='Busca apuntes'
      />
      <div className='flex gap-2'>
        { query && ( <SearchFormReset /> )}
        <button type='submit' className={` text-white ${mini ? 'mini-search-btn' : 'search-btn'}`}>
          <SearchIcon className={mini ? 'size-3': 'size-5'}/>
        </button>
      </div>
    </Form>

    </>
  )
}

export default SearchForm