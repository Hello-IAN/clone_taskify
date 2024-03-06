"use client";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import { Button } from '@/components/ui/button';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';


interface SwiperSliderProps {
	index:number
}
interface SwipeContent {
	topInfo?:string,
	topTitle:string,
	botTitle:string,
	btnTitle:string,
}

export const getSwipeContent = (index:number) =>  {
	switch(index) {
		case 0:
			return {
				topTitle:"test1",
				botTitle:"test1B",
				btnTitle:"toto"
			} as SwipeContent
			case 1:
				return {
				topInfo: `step ${index}`,
				topTitle:"test2",
				botTitle:"test2B",
				btnTitle:"twotwo",
			} as SwipeContent
			case 2:
				return {
				topInfo: `step ${index}`,
				topTitle:"test3",
				botTitle:"test3B",
				btnTitle:"twotwo",
			} as SwipeContent
			case 3:
				return {
				topInfo: `step ${index}`,
				topTitle:"test4",
				botTitle:"test4b",
				btnTitle:"fourfour",
			} as SwipeContent
			default:
				return null
	}
}

export const SwiperNextBtn = ({
	children
	}:{
  children: React.ReactNode
}) => {
	const swiper = useSwiper();
	return (
		<Button onClick={()=>{
			console.log("clicked")
			swiper.slideNext()}}>{children}</Button>
	)
}


export const SwiperSlider = ({index}:SwiperSliderProps) => {
	const swipeContent = getSwipeContent(index);
	console.log(index, "tetetetetetet")
	if (!swipeContent)
		return (<></>)
	return (
		<div className='w-full h-full'>
				<p className='font-semibold text-xl'>
					{swipeContent.topInfo}
				</p>
				<div>
					{swipeContent.topTitle}
				</div>
				<div>
					{swipeContent.botTitle}
				</div>
			{
				index != 3 ?
				<SwiperNextBtn>{swipeContent.btnTitle}</SwiperNextBtn>
				:
				<SwiperNextBtn>closemodal!</SwiperNextBtn>
			}
		</div>
	)
}
export const SwipeInModal = () => {
	const testMapped = [1,2,3,4]
	return (
		<Swiper pagination={true} modules={[Pagination]} className="h-64">
			{testMapped.map((data, index)=> 
				<SwiperSlide key={index}>
					<SwiperSlider index={index} />
				</SwiperSlide>
			)}
		</Swiper>
	)
}


