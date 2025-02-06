import React from 'react';
import Form from 'next/form';
import SearchFormReset from '@/components/searchForm/SearchFormReset';
import { SearchIcon } from 'lucide-react';

function SearchForm({ query, mini } : { query: string; mini?:boolean }) {

  return (
    <Form action="/" scroll={false} className={` ${mini ? 'mini-search-form' : 'search-form'}`}>
      <input
          name="query"
          defaultValue={query}
          className={` ${mini ? 'mini-search-input' : 'search-input'}`}
          placeholder='Busca apuntes'
      />
      <div className='flex gap-2'>
        { query && ( <SearchFormReset /> )}
        <button type='submit' className={` text-white ${mini ? 'mini-search-btn' : 'search-btn'}`}>
          <SearchIcon className={mini ? 'size-2': 'size-5'}/>
        </button>
      </div>
    </Form>
  )
}

export default SearchForm