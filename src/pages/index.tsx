import Head from 'next/head'
import { useEffect, useState } from 'react'
import { IMilk, fetchMilks } from '@/apicalls/milk'
import { Header, Icon, Pagination } from 'semantic-ui-react'
import MilkContent from '@/components/MilkContent'
import TypeFilter from '@/components/TypeFilter'
import Searchbar from '@/components/Searchbar'


export default function Home() {

  const [searchValue, setSearchValue] = useState<string>("");
  const searchChanged = (text: string) => {
    setSearchValue(text);
  }

  const [filterValue, setFilterValue] = useState<string[]>([]);
  const filterChanged = (value: string[]) => {
    setFilterValue(value);
  }
  
  const [milks, setMilks] = useState<IMilk[]>([]);

  let [products, setProducts] = useState(0);

  useEffect(() => {
    fetchMilks(setMilks);
  }, []);

  const [open, setOpen] = useState(false);
  const [errMessage, setErrMessage] = useState<string>("");


  return (
    <>
      <Head>
        <title>Milk App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="home-main">
        <Header className="home-header" as='h1' icon textAlign='center' inverted color='pink'>
          <Header.Content>The Milk Store</Header.Content>
        </Header>
        <div className="home-body">
          <div className="home-search-filter">
            <div className="home-search">
              <Searchbar milks={milks} searchChanged={searchChanged} />
            </div>
            <div className="home-filter">
              <TypeFilter filterChanged={filterChanged} />
            </div>
          </div>
          <p className="home-products">{products}products</p>
          <MilkContent milks={milks} filterValue={filterValue} searchValue={searchValue} products={products} setProducts={setProducts}/>
        </div>
        
      </main>

    </>
  )
}
