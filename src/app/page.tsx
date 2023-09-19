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

const cache = new Map()

export default async function Home() {
  const wod = await getWodCache()
  const onSelectType = (type: String) => {
    console.log(type)
  }

  return (
    <div className="mt-5">
      <Card sx={{ width: 375 }}>
        <CardContent>
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
          <Divider className="mt-5 mb-5" />
          <Typography variant="h6" component="div" className="mb-5">If you want other type of WOD</Typography>
          <TypeSelector />
        </CardContent>
      </Card>
    </div>
  )
}
