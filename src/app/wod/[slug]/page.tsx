import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Tag from "@/app/components/Tag"
import {BiTimer, BiAlignLeft} from "react-icons/bi"
import Stack from '@mui/material/Stack';
import Exercise from "@/app/components/Exercise"
import TypeSelector from "@/app/components/TypeSelector"
import Divider from '@mui/material/Divider';
import getWodCache from "@/resources/wodCache"
import { getWod } from "@/resources/wod"
import RefreshButton from "../../components/Refresh"

export default async function Home({
  params
} : {params: {slug: string}}) {
  let wod
  let { slug } = params
  console.log(process.env.NODE_ENV)
  if (slug == 'today' && process.env.NODE_ENV == 'development') {
    console.log('today')
    if (process.env.NODE_ENV == 'development') wod = await getWodCache()
    else wod = await getWod()
  } else if (slug == 'refresh') {
    console.log('refresh')
    wod = await getWod()
  } else {
    console.log(slug)
    wod = await getWod(slug)
  }

  return (
    <div className="mt-5">
      <Card sx={{ width: 375 }}>
        <CardContent className="relative">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Workout of Day
          </Typography>
          <Stack spacing={1} direction="row" alignItems="left" className='mb-5 mt-5'>
            <Tag label={wod.type} icon={<BiAlignLeft size="1.5em" />} />
            <Tag label={wod.timecap} icon={<BiTimer size="1.5em" />} />
          </Stack>
          <Typography variant="h5" component="div" className="mb-5">
            {wod.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {wod.description}
          </Typography>
          <Exercise lines={wod.exercises} />
          <RefreshButton />
          <Divider className="mt-5 mb-5" />
          <Typography variant="h6" component="div" className="mb-5">If you want other type of WOD</Typography>
          <TypeSelector />
        </CardContent>
      </Card>
    </div>
  )
}
