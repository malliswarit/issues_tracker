'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-lg space-y-6'>
        <TextField.Root>
            <TextField.Input placeholder='Title' />
        </TextField.Root>
        <TextArea placeholder='Description' />
        <Button>Submit Issue</Button>
    </div>
  )
}

export default NewIssuePage