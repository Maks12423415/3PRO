"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
import { Button } from '@/components/ui/button'


export default function Api() {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const api = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=361b6ef9b64c4eab9af4bfcb11cd4243`)
        const data = await api.json()
        setResponse(data.articles)  
        console.log(data)
      } catch (error) {
        setError(true)
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div className='flex flex-wrap space-x-5 gap-5 h-screen w-full justify-center items-center'>
      <h1>{error && "Nie pobrano danych!"}</h1>
      
      { response && response.map((article, index) => (
        article.author != null && 
        <Card key={index} className={'flex flex-col items-center justify-center h-[600px] w-[500px]'}>
          <CardHeader>
           {article.urlToImage !=null && <Image
              className={'w-full h-[300px]'}
              src={article.urlToImage }
              alt={article.description}
              width={300}
              height={200}
            />}
            <CardTitle>{article.title}</CardTitle>
          </CardHeader>
          <CardContent className={'overflow-y-hidden flex-grow'}>{article.content}</CardContent>
          <CardFooter className='grid place-items-end   w-full  gap-5  mt-auto  '> 
          <Link  href={article.url}><Button>More</Button></Link>
          </CardFooter>
        </Card>
           
      ))}
    </div>
  )
}
