import type { NextPage } from 'next'
import LaunchGraph from '../components/LaunchGraph'
import Layout from '../components/layout/Layout'
import client from '../lib/apolloClient'
import { gql } from '@apollo/client'

const Home = ({ launchData }: any) => {

  return (
    <Layout>
      <div className='flex flex-col xl:flex-row w-full'>
        <div className='h-96 xl:w-1/2 flex mx-auto'>
          <LaunchGraph launchData={launchData}  />
        </div>
        <div className='h-96 xl:w-1/2 flex mx-auto'>
          <LaunchGraph launchData={launchData}  />
        </div>
        
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Launches {
        launchpads {
          successful_launches
          attempted_launches
          name
          location {
            region
          }
        }
      }
      `
  })



  return {
    props: {
      launchData: data.launchpads
    }
  }
}

export default Home
