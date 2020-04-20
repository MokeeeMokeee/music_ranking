import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { useHistory } from 'react-router-dom'

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

const TopPage: React.FC<TopPageProps> = () => {
  // countの仮置き場として使いたい。
  // いまはloopするErrorを修正してから使う感じで。
  // const [hoge, setCount] = useState(0)
  let test: number = 0
  const history = useHistory()

  // dataはaxiosを使って入れる。
  // const [data, setData] = useState({ datas: []})
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://database.url/hoge'
  //     )

  //     setData(result.data)
  //   }

  //   fetchData()
  // }, [])

  const data = [
    {
      id: 1,
      title: '千本桜',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51tMFUFxGZL._SY400_.jpg',
      link: 'https://www.youtube.com/watch?v=shs0rAiwsGQ',
      count: 20,
    },
    {
      id: 2,
      title: 'カゲロウデイズ',
      image: 'https://lohas.nicoseiga.jp/material/3dc3d0/7657102',
      link: 'https://www.youtube.com/watch?v=EMGyiiTC7sg',
      count: 10,
    },
    {
      id: 3,
      title: 'メルト',
      image:
        'https://img.discogs.com/TfmODiDUGq0rkzF0gqtsYuhC86c=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10900079-1506194597-6405.jpeg.jpg',
      link: 'https://www.youtube.com/watch?v=o1jAMSQyVPc',
      count: 9,
    },
    {
      id: 4,
      title: 'マトリョウシカ',
      image:
        'https://cdn.piapro.jp/thumb_i/l8/l8x53jyehxd4i7c7_20120125185956_0740_0500.png',
      link: 'https://www.nicovideo.jp/watch/sm11809611',
      count: 7,
    },
    {
      id: 5,
      title: 'ロキ',
      image: 'https://i.ytimg.com/vi/Xg-qfsKN2_E/maxresdefault.jpg',
      link: 'https://www.nicovideo.jp/watch/sm32798041',
      count: 5,
    },
    {
      id: 6,
      title: 'グリーンライツ・セレナーデ',
      image: 'https://i.ytimg.com/vi/XSLhsjepelI/maxresdefault.jpg',
      link: 'https://www.nicovideo.jp/watch/sm33480697',
      count: 5,
    },
    {
      id: 7,
      title: 'グリーンライツ・セレナーデ',
      image: 'https://i.ytimg.com/vi/XSLhsjepelI/maxresdefault.jpg',
      link: 'https://www.nicovideo.jp/watch/sm33480697',
      count: 5,
    },
  ]

  function AddCount(dataId: number) {
    console.log(dataId)
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
        {data.map((items, index) => {
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
                    <AddCounter onClick={() => AddCount(items.id)}>
                      b
                    </AddCounter>
                    <p>{items.count}</p>
                  </TopRank>
                </TopRankContent>
              ) : null}
            </>
          )
        })}
      </TopRankConatiner>
      <RankContainer>
        <TableHeader>
          <p>サムネ</p>
          <p>曲名</p>
          <p>投票数</p>
        </TableHeader>
        {data.map((items, index) => {
          return (
            <>
              {index < 3 ? null : (
                <RankContent>
                  <PageRedirect href={items.link}>
                    <ViewContent>
                      {/* {test === items.count ? (
                      <Rank>{index}</Rank>
                    ) : (
                      <Rank>{index + 1}</Rank>
                    )} */}
                      <RankImage src={`${items.image}`} />
                      <RankTitle>{items.title}</RankTitle>
                    </ViewContent>
                  </PageRedirect>
                  <RankCount>
                    <AddCounter onClick={() => AddCount(items.id)}>
                      b
                    </AddCounter>
                    {(test = items.count)}
                  </RankCount>

                  {/* {setCount(items.count)}
                  Error: Too many re-renders. React limits the number of renders
                  to prevent an infinite loop.
                  ここでitems.countを仮で置いといて、前の奴と同じ場合に
                  Rankingの番号を同列にする処理を書きたいけど、
                  loopする。
                  いい方法が思いついたら修正する。 */}
                </RankContent>
              )}
            </>
          )
        })}
      </RankContainer>
    </>
  )
}

export default TopPage
