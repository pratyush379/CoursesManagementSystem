package com.pratyush.springrest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratyush.springrest.dao.CourseDao;
import com.pratyush.springrest.entity.Course;

@Service
public class CourseServiceImpl implements CourseService {

	//List<Course> list;
	
	
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl() {
//		list = new ArrayList<>();
//		list.add(new Course(123,"spring","good"));
//		list.add(new Course(126,"spring","good"));
	
	}
	
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		// TODO Auto-generated method stub
		
//		Course c = null;
//		for(Course course:list) {
//			if(course.getId()==courseId)
//				c=course;
//			    break;
//		}
//		return c;
		Optional<Course> optinalCourse =  courseDao.findById(courseId);
		 Course courseEntity = optinalCourse.get();
		
		return courseEntity;
	}

	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
//		list.add(course);
//		return course;
		
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
//		list.forEach(e ->{
//		if(e.getId() == course.getId()) {
//			e.setTitle(course.getTitle());
//			e.setDescription(course.getDescription());
//		}
//		});
//		return course;
		
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long courseId) {
		// TODO Auto-generated method stub
	//	list = this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
	    Course entity = courseDao.getOne(courseId);
		
		courseDao.delete(entity);
	}

}
