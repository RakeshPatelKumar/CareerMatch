import React from 'react'
import { getUserOnboardingStatus } from '../../../actions/user';
import { redirect } from 'next/navigation';
import { getIndustryInsights } from '../../../actions/dashboard';
import DashboardView from './_components/dashboard-view';

const IndistryInsightsPage = async () => {

  const {isOnboarded} = await getUserOnboardingStatus();
  const insights = await getIndustryInsights();

  if(!isOnboarded){
    // redirect to onboarding 
    redirect('/onboarding'); 
  } 

  return (
    <div className='container mx-auto'>
      <DashboardView insights = {insights} />
    </div>
  )
}

export default IndistryInsightsPage