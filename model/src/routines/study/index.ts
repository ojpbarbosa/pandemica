import { Activities, Activity, getActivity } from '../../population/activities'
import { Individual, Occupation } from '../../population/individual'
import { selectTransportation } from '../selectors'

export function selectStudyActivity(individual: Individual, studyOccupation: Occupation) {
  const newActivities: Activity[] = []

  const stayAtHomeActivity = getActivity(Activities.StayAtHome)
  stayAtHomeActivity.duration = 30
  stayAtHomeActivity.maximumIndividualsEngaged = individual.house.size
  newActivities.push(stayAtHomeActivity)

  const transportationActivities = selectTransportation(individual.transportationMean)
  newActivities.push(...transportationActivities)

  const schoolActivity = getActivity(studyOccupation.label)
  newActivities.push(schoolActivity)

  return newActivities
}