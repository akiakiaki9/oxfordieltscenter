'use client'
import React from 'react'
import CourseStats from './CourseStats'
import CommentList from './CommentList'

export default function CoursesDetail({ data }) {
    return (
        <div className="coursesdet">
            <div className="coursesdet-blok">
                <div className="coursesdet-blok__section-1">
                    <CourseStats data={data} />
                    <CommentList data={data} />
                </div>
            </div>
        </div>
    )
};