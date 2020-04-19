import * as React from 'react'
import styled from 'styled-components'

/**
 * components
 */
import Header from './header/Header'

interface TopPageProps {}

const deta = [
  {
    id: 1,
    title: '千本桜',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51tMFUFxGZL._SY400_.jpg',
    releaseDay: '2011-09-17',
    link: 'https://www.youtube.com/watch?v=shs0rAiwsGQ',
    count: 20,
  },
  {
    id: 2,
    title: 'カゲロウデイズ',
    image: 'https://lohas.nicoseiga.jp/material/3dc3d0/7657102',
    releaseDay: '2012-05-30',
    link: 'https://www.youtube.com/watch?v=EMGyiiTC7sg',
    count: 10,
  },
  {
    id: 3,
    title: 'メルト',
    image:
      'https://img.discogs.com/TfmODiDUGq0rkzF0gqtsYuhC86c=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10900079-1506194597-6405.jpeg.jpg',
    releaseDay: '2007-12-07',
    link: 'https://www.youtube.com/watch?v=o1jAMSQyVPc',
    count: 9,
  },
  {
    id: 4,
    title: 'マトリョウシカ',
    image:
      'https://cdn.piapro.jp/thumb_i/l8/l8x53jyehxd4i7c7_20120125185956_0740_0500.png',
    releaseDay: '2010-08-19',
    link: 'https://www.nicovideo.jp/watch/sm11809611',
    count: 7,
  },
  {
    id: 5,
    title: 'ロキ',
    image: 'https://i.ytimg.com/vi/Xg-qfsKN2_E/maxresdefault.jpg',
    releaseDay: '2018-02-27',
    link: 'https://www.nicovideo.jp/watch/sm32798041',
    count: 5,
  },
  {
    id: 3,
    title: 'グリーンライツ・セレナーデ',
    image: 'https://i.ytimg.com/vi/XSLhsjepelI/maxresdefault.jpg',
    releaseDay: '2018-07-06',
    link: 'https://www.nicovideo.jp/watch/sm33480697',
    count: 5,
  },
]

const TopPage: React.FC<TopPageProps> = () => {
  return (
    <>
      <Header title={'TopPage'} />
      <p>mainPage</p>
    </>
  )
}

export default TopPage
