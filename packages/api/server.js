import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import { randomBytes } from 'crypto'
import express from 'express'
import jwt from 'jsonwebtoken'
import { MeiliSearch } from 'meilisearch'
import APIRoutes from './Routes/index.js'
const client = new MeiliSearch({ host: 'http://localhost:7700' })

const app = express()

const prisma = new PrismaClient()
const PORT = 4000

const ACCESS_TOKEN_EXPIRE_TIME = 3600
const JWT_ACCESS_SECRET = 'access_secret_HH'

const authTokenMiddleware = secret => {
  return (req, res, next) => {
    const token = req.headers['authorization']
    if (token) {
      try {
        const user = jwt.verify(token, secret)
        req.user = user
      } catch (err) {
        console.log(err)
      }
    }
    next()
  }
}

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(authTokenMiddleware(JWT_ACCESS_SECRET))

app.disable('x-powered-by')

app.use('/api', APIRoutes)

app.get('/mlh', (req, res) => {
  console.log('MLH')
  const mlhData = [
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/389/thumb/Discord_Icon.png?1670325012',
      title: 'EduHacks',
      url: 'https://organize.mlh.io/participants/events/8828-eduhacks',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/389/thumb/MLH_Event_Hero.png?1670325012',
      date: 'DEC 9TH - 11TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/390/thumb/Discord_Icon.png?1670325083',
      title: 'Hack-on-chain',
      url: 'https://organize.mlh.io/participants/events/8827-hack-on-chain',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/390/thumb/MLH_Event_Hero.png?1670325083',
      date: 'DEC 9TH - 11TH',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/408/thumb/_1669316806058_300x300_%281%29.png?1669810731',
      title: 'TechEden 2.0',
      url: 'https://techeden.oscvitap.org/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/408/thumb/_1669316806108_Event_Logo_Square_100x100_%281%29.png?1669810731',
      date: 'DEC 10TH - 11TH',
      location: { city: 'Vijaywada', state: 'Andhra Pradesh' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/391/thumb/Discord_Icon.png?1670499037',
      title: 'AI Hacks',
      url: 'https://organize.mlh.io/participants/events/8829-ai-hacks',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/391/thumb/MLH_Event_Hero.png?1670499033',
      date: 'DEC 16TH - 18TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/392/thumb/Discord_Icon.png?1670499087',
      title: 'Support-a-thon',
      url: 'https://organize.mlh.io/participants/events/8830-support-a-thon',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/392/thumb/MLH_Event_Hero.png?1670499086',
      date: 'DEC 16TH - 18TH',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/394/thumb/Discord_Icon.png?1670499136',
      title: 'Design-a-thon',
      url: 'https://organize.mlh.io/participants/events/8832-design-a-thon',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/394/thumb/MLH_Event_Hero.png?1670499136',
      date: 'DEC 23RD - 25TH',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/393/thumb/Discord_Icon.png?1670499271',
      title: 'Hacky Winterland 2',
      url: 'https://organize.mlh.io/participants/events/8831-hacky-winterland-2',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/393/thumb/MLH_Event_Hero.png?1670499271',
      date: 'DEC 23RD - 25TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/396/thumb/Backsplash.png?1668193192',
      title: 'Hacky New Year!',
      url: 'https://organize.mlh.io/participants/events/8833-hacky-new-year',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/396/thumb/fph-gene-logo.jpeg?1668193192',
      date: 'DEC 30TH - JAN 1ST',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/395/thumb/Discord_Icon.png?1670499390',
      title: 'See You Later, Hackulator 2',
      url: 'https://organize.mlh.io/participants/events/8836-see-you-later-hackulator-2',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/395/thumb/MLH_Event_Hero.png?1670499390',
      date: 'DEC 30TH - JAN 1ST',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/400/thumb/HackNITR_4.0.png?1668611840',
      title: 'HackNITR 4.0',
      url: 'http://hacknitr.com/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/400/thumb/_1667215778336_Cover.png?1668611839',
      date: 'JAN 6TH - 8TH',
      location: { city: 'Everywhere', state: 'Worldwide' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/457/thumb/Background.png?1670431134',
      title: 'HackED',
      url: 'https://hacked.compeclub.com/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/457/thumb/Logo_Square.png?1670431134',
      date: 'JAN 7TH - 8TH',
      location: { city: 'Alberta', state: 'Canada' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/458/thumb/_1669668208734_CruzHacks_Icon_Gradient.png?1670431267',
      title: 'CruzHacks',
      url: 'https://www.cruzhacks.com/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/458/thumb/_1669668208695_mlh_cruzhacks.png?1670431266',
      date: 'JAN 13TH - 15TH',
      location: { city: 'Santa Cruz', state: 'California' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/200/thumb/_1662821526035_HACKFREE_100X100__1__%281%29.png?1663789835',
      title: 'HackFRee',
      url: 'http://www.hackfree.info/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/200/thumb/_1662821526035_HACKFREE_100X100__1__%281%29.png?1663789773',
      date: 'JAN 14TH - 15TH',
      location: { city: 'Manalapan', state: 'New Jersey' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/459/thumb/_1670039153726_Rosehack_2023_Background__4_.png?1670432271',
      title: 'Rose Hack',
      url: 'https://rosehack.com/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/459/thumb/_1668672921669_RH2023LOGO__1_.jpg?1670432271',
      date: 'JAN 14TH - 15TH',
      location: { city: 'Riverside', state: 'California' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/455/thumb/_1667479413785_BMX_main_logo_%281%29.png?1670267394',
      title: 'BoilerMake X',
      url: 'https://boilermake.org/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/455/thumb/_1667479413785_BMX_main_logo_%281%29.png?1670267393',
      date: 'JAN 20TH - 22ND',
      location: { city: 'West Lafayette', state: 'Indiana' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/415/thumb/Backsplash.png?1669824463',
      title: 'CivicHacks',
      url: 'https://organize.mlh.io/participants/events/8993-civichacks',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/415/thumb/fph-gene-logo.jpeg?1669824463',
      date: 'JAN 20TH - 22ND',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/416/thumb/Backsplash.png?1669824525',
      title: 'HackFit 2',
      url: 'https://organize.mlh.io/participants/events/8994-hackfit-2',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/416/thumb/fph-gene-logo.jpeg?1669824525',
      date: 'JAN 20TH - 22ND',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/211/646/thumb/_1656606838987_300x300_Box_%281%29.png?1657019916',
      title: 'ConUHacks VII',
      url: 'https://conuhacks.io/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/211/646/thumb/_1656606839036_100x100_Logo.png?1657018033',
      date: 'JAN 21ST - 22ND',
      location: { city: 'Montreal', state: 'Quebec' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/414/thumb/Backsplash.png?1669815826',
      title: 'Hack-commerce',
      url: 'https://organize.mlh.io/participants/events/8992-hack-commerce',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/414/thumb/fph-gene-logo.jpeg?1669815826',
      date: 'JAN 27TH - 29TH',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/413/thumb/Backsplash.png?1669815766',
      title: 'Hackrithmitic 2',
      url: 'https://organize.mlh.io/participants/events/8991-hackrithmitic-2',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/413/thumb/fph-gene-logo.jpeg?1669815766',
      date: 'JAN 27TH - 29TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/266/thumb/_1663877354856_HH_2023_Background_%281%29.png?1664992373',
      title: 'Hoya Hacks',
      url: 'https://hoyahacks.georgetown.domains/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/266/thumb/cropped-dog.png?1664992372',
      date: 'JAN 27TH - 29TH',
      location: { city: 'Washington', state: 'DC' },
      type: 'Hybrid, In-Person Focus'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/407/thumb/QHacks_2023_Banner_300_300_px.jpg?1669294737',
      title: 'QHacks',
      url: 'https://qhacks.io/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/407/thumb/_1669138314383_Logo_QHacks.png?1669240920',
      date: 'JAN 27TH - 29TH',
      location: { city: 'Ontario', state: 'Canada' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/460/thumb/newsletter_banner.png?1670434110',
      title: 'QWER Hacks',
      url: 'https://qwerhacks.com/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/460/thumb/2023_logo.png?1670434110',
      date: 'JAN 27TH - 29TH',
      location: { city: 'Los Angeles', state: 'California' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/141/thumb/_1661578962087_event-background.PNG?1662969492',
      title: 'hackTAMS',
      url: 'https://2023.hacktams.org/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/141/thumb/_1661578962145_event-logo.PNG?1662969492',
      date: 'JAN 28TH - 29TH',
      location: { city: 'Denton', state: 'Texas' },
      type: 'Hybrid, In-Person Focus'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/405/thumb/_1668899870934_backsplash.png?1669155224',
      title: 'McHacks',
      url: 'https://www.mchacks.ca/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/405/thumb/_1668899871504_logo.png?1669155223',
      date: 'JAN 28TH - 29TH',
      location: { city: 'Montreal', state: 'Quebec' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/456/thumb/_1670013815130_SpartaHack8-Background-Square.png?1670269058',
      title: 'SpartaHack',
      url: 'http://www.spartahack.com/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/456/thumb/_1670013815181_SpartaHack8-Logo-Square.png?1670269058',
      date: 'JAN 28TH - 29TH',
      location: { city: 'East Lansing', state: 'MI' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/211/636/thumb/_1656683294277_tamuhack_splash.png?1656712701',
      title: 'TAMUhack',
      url: 'http://tamuhack.com/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/211/636/thumb/_1656683294326_tamuhack_icon.png?1656712701',
      date: 'JAN 28TH - 29TH',
      location: { city: 'College Station', state: 'Texas' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/449/thumb/Backsplash.png?1670052391',
      title: 'Hack-ccelerate',
      url: 'https://organize.mlh.io/participants/events/9001-hack-ccelerate',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/449/thumb/fph-gene-logo.jpeg?1670051970',
      date: 'FEB 3RD - 5TH',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/448/thumb/Backsplash.png?1670051917',
      title: 'Hack for the Future',
      url: 'https://organize.mlh.io/participants/events/9000-hack-for-the-future',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/448/thumb/fph-gene-logo.jpeg?1670051917',
      date: 'FEB 3RD - 5TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/211/559/thumb/background.png?1657871617',
      title: 'Hack This Fall',
      url: 'https://hackthisfall.tech/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/211/559/thumb/_1656686778557_300X300-LightBG-8.png?1656699165',
      date: 'FEB 3RD - 5TH',
      location: { city: 'IN', state: 'India' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/211/561/thumb/UH8Background300x300.png?1659375649',
      title: 'UGAHacks 8',
      url: 'https://8.ugahacks.com/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/211/561/thumb/UH8EventLogo100x100.png?1659375648',
      date: 'FEB 3RD - 5TH',
      location: { city: 'Athens', state: 'Georgia' },
      type: 'In-Person Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/412/thumb/Backsplash.png?1669815710',
      title: 'ConnectHacks',
      url: 'https://organize.mlh.io/participants/events/8990-connecthacks',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/412/thumb/fph-gene-logo.jpeg?1669815710',
      date: 'FEB 10TH - 12TH',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/450/thumb/Backsplash.png?1670052430',
      title: '#Hackathon',
      url: 'https://organize.mlh.io/participants/events/9003-hackathon',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/450/thumb/fph-gene-logo.jpeg?1670052039',
      date: 'FEB 10TH - 12TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/211/562/thumb/Hacklytics_splash_screen.png?1656712204',
      title: 'Hacklytics 2023',
      url: 'https://hacklytics.io/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/211/562/thumb/Hacklytics_logo.png?1656712204',
      date: 'FEB 10TH - 12TH',
      location: { city: 'Atlanta', state: 'Georgia' },
      type: 'Hybrid, In-Person Focus'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/451/thumb/Backsplash.png?1670052513',
      title: 'TransportHacks',
      url: 'https://organize.mlh.io/participants/events/9007-transporthacks',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/451/thumb/fph-gene-logo.jpeg?1670052097',
      date: 'FEB 17TH - 19TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/452/thumb/Backsplash.png?1670052533',
      title: 'Work-a-thon',
      url: 'https://organize.mlh.io/participants/events/9006-work-a-thon',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/452/thumb/fph-gene-logo.jpeg?1670052161',
      date: 'FEB 17TH - 19TH',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/454/thumb/Backsplash.png?1670052302',
      title: 'Hack Around the World 2',
      url: 'https://organize.mlh.io/participants/events/9005-hack-around-the-world-2',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/454/thumb/fph-gene-logo.jpeg?1670052302',
      date: 'FEB 24TH - 26TH',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/453/thumb/Backsplash.png?1670052227',
      title: 'WhiskerHacks',
      url: 'https://organize.mlh.io/participants/events/9004-whiskerhacks',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/453/thumb/fph-gene-logo.jpeg?1670052227',
      date: 'FEB 24TH - 26TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/252/thumb/athenahacks_backsplash2.png?1666625116',
      title: 'AthenaHacks',
      url: 'https://athenahacks.com/',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/252/thumb/athena2023_gradientlogo.png?1664810260',
      date: 'FEB 25TH - 26TH',
      location: { city: 'Los Angelos', state: 'California' },
      type: 'Hybrid, In-Person Focus'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/410/thumb/Backsplash.png?1669815542',
      title: 'Hack-for-creators',
      url: 'https://organize.mlh.io/participants/events/8987-hack-for-creators',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/410/thumb/fph-gene-logo.jpeg?1669815542',
      date: 'MAR 3RD - 5TH',
      location: { city: 'APAC Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/409/thumb/Backsplash.png?1669815463',
      title: 'Space-a-thon',
      url: 'https://organize.mlh.io/participants/events/8986-space-a-thon',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/409/thumb/fph-gene-logo.jpeg?1669815463',
      date: 'MAR 3RD - 5TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    },
    {
      imageUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/411/thumb/Backsplash.png?1669815648',
      title: 'AirHacks',
      url: 'https://organize.mlh.io/participants/events/8989-airhacks',
      logoUrl:
        'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/212/411/thumb/fph-gene-logo.jpeg?1669815648',
      date: 'MAR 10TH - 12TH',
      location: { city: 'North American Timezone', state: 'Online' },
      type: 'Digital Only'
    }
  ].map((event, index) => {
    return {
      ...event,
      id: index
    }
  })

  let response

  client
    .index('mlh')
    .addDocuments(mlhData)
    .then(res => {
      console.log(res)
      response = res
    })
    .catch(err => console.log(err))

  client.getTasks().then(res => console.log(JSON.stringify(res)))
  res.json({ response })
})

app.get('/', (req, res) => {
  res.json({ user: req.user })
})

app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body
  const userAgent = req.headers['user-agent']
  console.log({ userAgent })
  if (!userAgent)
    return res.send({ status: 401, msg: 'user-agent not found......' })
  const user = await prisma.user.findFirst({
    where: { email }
  })
  if (!user || !user.isActive)
    return res.send({
      status: 401,
      msg: 'user not found or user is inactive...!'
    })
  if (!(await bcrypt.compare(password, user.password)))
    return res.send({
      status: 401,
      msg: 'user credentials not found'
    })
  const { accessToken, refreshToken, issuedAt, expiresAt } =
    generateTokens(user)
  try {
    await prisma.refreshTokens.create({
      data: {
        userAgent,
        token: refreshToken,
        userId: user.id
      }
    })
  } catch (err) {
    console.log(err)
  }
  res.status(200).json({
    result: {
      userId: user.id,
      role: user.role,
      email: user.email,
      fullname: user.name,
      profileImage: user.profileImage,
      accessToken,
      refreshToken,
      issuedAt,
      expiresAt
    },
    status: 200
  })
})

app.post('/refresh', async (req, res) => {
  console.log('called', req.body)
  const { token } = req.body
  if (!token) return res.status(400).json({ msg: 'token not provided' })
  const userAgent = req.headers['user-agent']
  if (!userAgent) res.status(400).json({ msg: 'user-agent not provided' })
  try {
    const foundRefreshToken = await prisma.refreshTokens.findFirst({
      where: {
        token
      }
    })
    console.log({ foundRefreshToken })
    if (!foundRefreshToken || !foundRefreshToken.isActive)
      return res.status(403).json({
        msg: 'no refresh token is found'
      })

    const user = await prisma.user.findFirst({
      where: {
        id: foundRefreshToken.userId
      }
    })
    if (!user)
      return res.status(401).json({ msg: 'no user found with that token' })
    if (!user.isActive)
      return res.status(403).json({ msg: 'user is not active' })
    const { accessToken, refreshToken, issuedAt, expiresAt } =
      generateTokens(user)
    await prisma.refreshTokens.update({
      where: {
        id: foundRefreshToken.id
      },
      data: {
        token: refreshToken,
        userAgent
      }
    })

    return res.status(200).json({
      userId: user.id,
      role: user.role,
      email: user.email,
      fullname: user.name,
      profileImage: user.profileImage,
      accessToken,
      refreshToken,
      issuedAt,
      expiresAt
    })
  } catch (error) {
    console.log(error)
  }
})

app.get('/api/admin/activeSessions', async (req, res) => {
  try {
    const result = await prisma.refreshTokens.findMany()
    res.json({ status: 200, result })
  } catch (error) {
    console.log(error)
  }
})

const generateTokens = user => {
  const iat = Math.floor(Date.now() / 1000)
  const expire = Math.floor(Date.now() / 1000) + ACCESS_TOKEN_EXPIRE_TIME
  const accessToken = jwt.sign(
    {
      id: user.id,
      role: user.role,
      iat,
      expire
    },
    JWT_ACCESS_SECRET
  )
  const refreshToken = generateRandomString()
  return {
    accessToken,
    refreshToken,
    issuedAt: iat,
    expiresAt: expire
  }
}
const generateRandomString = () => randomBytes(128).toString('hex')

app.listen(PORT, console.log('server started on port' + ' ' + PORT))
