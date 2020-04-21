import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { dataQuery } from './data/queries'
import { submitData } from './data/mutaitions'

/**
 * components
 */
import Header from './header/Header'

/**
 * styled
 */
const Image = styled.img`
  max-width: 15rem;
  max-height: 15rem;
  min-width: 15rem;
  min-height: 15rem;
  @media screen and (max-width: 800px) {
    max-width: 20rem;
    max-height: 20rem;
    min-width: 20rem;
    min-height: 20rem;
  }
  object-fit: cover;
`

const TopRankConatiner = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

const TopRankContent = styled.div`
  position: relative;
  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;
  }
`

const FirstRank = styled.h2`
  padding: 1rem 1rem 3rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  display: table;
  font-weight: bold;
  -webkit-text-stroke: 0.5px #000;
  color: #fff;
  background-color: ${(props) => rgba(props.theme.colors.gold, 0.7)};
`
const SecondRank = styled.h2`
  padding: 1rem 1rem 3rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  display: table;
  font-weight: bold;
  -webkit-text-stroke: 0.5px #000;
  color: #fff;
  background-color: ${(props) => rgba(props.theme.colors.silver, 0.7)};
`
const ThirdRank = styled.h2`
  padding: 1rem 1rem 3rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  display: table;
  font-weight: bold;
  -webkit-text-stroke: 0.5px #000;
  color: #fff;
  background-color: ${(props) => rgba(props.theme.colors.bronze, 0.7)};
`

const TopTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.headline5};
  font-weight: bold;
`

const RankContainer = styled.div`
  border: 2px solid ${(props) => props.theme.colors.black};
  margin: 1rem 2rem;
`

const RankContent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
`

// const Rank = styled.p`
//   flex: 1;
//   text-align: center;
// `

const RankImage = styled.img`
  max-width: 7rem;
  max-height: 7rem;
  min-width: 5rem;
  min-height: 5rem;
  flex: 1;
  object-fit: cover;
`

const RankTitle = styled.p`
  flex: 5;
  padding-left: 1rem;
  border: solid ${(props) => props.theme.colors.black};
  border-width: 0 1px 0 1px;
`

const RankCount = styled.p`
  flex: 1;
  text-align: center;
`

const PageRedirect = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 6;
`

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 2px solid;
  p {
    padding: 1rem 0;
  }
  p:nth-child(1) {
    max-width: 7rem;
    min-width: 5rem;
    flex: 1;
  }
  p:nth-child(2) {
    flex: 5;
    border: solid ${(props) => props.theme.colors.black};
    border-width: 0 2px 0 2px;
  }
  p:nth-child(3) {
    flex: 1;
  }
`

const ViewContent = styled.div`
  display: flex;
  align-items: center;
`

const AddCounter = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25rem;
  margin-right: 0.5rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const TopRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

interface TopPageProps {}

interface DatasProps {
  id: number
  title: string
  image: string
  link: string
  count: number
  index: number
}

const TopPage: React.FC<TopPageProps> = () => {
  // countの仮置き場として使いたい。
  // いまはloopするErrorを修正してから使う感じで。
  // const [hoge, setCount] = useState(0)
  let test: number = 0
  const history = useHistory()
  // dataはaxiosを使って入れる。
  const [datas, setData] = useState<DatasProps[]>([])

  useEffect(() => {
    console.log(dataQuery)
    const fetchData = async () => {
      await axios({
        url: 'https://music-ranking-moke.herokuapp.com/v1/graphql',
        method: 'post',
        data: { query: `${dataQuery}` },
      }).then((result) => {
        console.log(result.data.data.data)
        setData(result.data.data.data)
      })
    }

    fetchData()
  }, [])

  function AddCount(dataId: number, count: number) {
    console.log(dataId)
    console.log(count + 1)
    axios({
      url: 'https://music-ranking-moke.herokuapp.com/v1/graphql',
      method: 'post',
      data: {
        query: `mutation update_data{
          update_data(
            where: {id: {_eq: ${dataId}}},
            _set:{
              count: ${count + 1}
            }
          ) {
            returning{
              id
            title
            }
          }
        }`,
      },
    }).then((result) => {
      console.log(result.data)
      alert('ok')
      history.go(0)
    })
    // dataのIDでcountを一つ上げる。
    // 無事に処理が終わったらalertとhistory.go(0)
    // でページ事態をreload
    // alert('投票しました')
    // history.go(0)
  }

  return (
    <>
      <Header title={'TopPage'} />
      <TopRankConatiner>
        {datas != null
          ? datas.map((items, index) => {
              return (
                <>
                  {index < 3 ? (
                    <TopRankContent>
                      <PageRedirect href={items.link}>
                        {index === 0 ? (
                          <FirstRank>{index + 1}</FirstRank>
                        ) : index === 1 ? (
                          <SecondRank>{index + 1}</SecondRank>
                        ) : (
                          <ThirdRank>{index + 1}</ThirdRank>
                        )}
                        <Image src={`${items.image}`} />
                        <TopTitle>{items.title}</TopTitle>
                      </PageRedirect>
                      <TopRank>
                        <AddCounter
                          onClick={() => AddCount(items.id, items.count)}
                        >
                          b
                        </AddCounter>
                        <p>{items.count}</p>
                      </TopRank>
                    </TopRankContent>
                  ) : null}
                </>
              )
            })
          : null}
      </TopRankConatiner>
      <RankContainer>
        <TableHeader>
          <p>サムネ</p>
          <p>曲名</p>
          <p>投票数</p>
        </TableHeader>
        {datas != null
          ? datas.map((items, index) => {
              return (
                <>
                  {index < 3 ? null : (
                    <RankContent>
                      <PageRedirect href={items.link}>
                        <ViewContent>
                          <RankImage src={`${items.image}`} />
                          <RankTitle>{items.title}</RankTitle>
                        </ViewContent>
                      </PageRedirect>
                      <RankCount>
                        <AddCounter
                          onClick={() => AddCount(items.id, items.count)}
                        >
                          b
                        </AddCounter>
                        {(test = items.count)}
                      </RankCount>
                    </RankContent>
                  )}
                </>
              )
            })
          : null}
      </RankContainer>
    </>
  )
}

export default TopPage
