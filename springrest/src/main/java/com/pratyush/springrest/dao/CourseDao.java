package com.pratyush.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pratyush.springrest.entity.Course;

public interface CourseDao extends JpaRepository<Course,Long> {

}
