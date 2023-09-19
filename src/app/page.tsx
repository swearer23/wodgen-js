import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { getWod } from "@/resources/wod"

export default async function Home() {

  const wod = await getWod()
  console.log(wod)

  // const wod = {
  //   "name": "Power and Endurance",
  //   "description": "A challenging workout focusing on both power and endurance.",
  //   "duration": "60 minutes",
  //   "rounds": 3,
  //   "exercises": [
  //     {
  //       "name": "Power Cleans",
  //       "description": "Perform 10 power cleans with a barbell",
  //       "sets": 3,
  //       "reps": 10,
  //       "weight": "75% of 1RM"
  //     },
  //     {
  //       "name": "Box Jumps",
  //       "description": "Complete 15 box jumps onto a 24-inch box",
  //       "sets": 3,
  //       "reps": 15,
  //       "height": "24 inches"
  //     },
  //     {
  //       "name": "Rowing",
  //       "description": "Row 500 meters at a moderate pace",
  //       "sets": 3,
  //       "distance": "500 meters"
  //     },
  //     {
  //       "name": "Burpees",
  //       "description": "Perform 20 burpees",
  //       "sets": 3,
  //       "reps": 20
  //     }
  //   ]
  // }

  return (
    <div className="mt-5">
      <Card sx={{ width: 375 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Workout of Day
          </Typography>
          <Typography variant="h5" component="div">
            {wod.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {wod.description}
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
