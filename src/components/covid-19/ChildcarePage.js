import React from 'react';
import Collapsible from '../Collapsible';

const ChildcarePage = () => {
    return (<>
        <h2>Childcare/Homeschooling</h2>
        <Collapsible title='CovEd' content={<>
            <p>One-on-one tutoring</p>
            <p>A free platform started by university students that pairs undergraduate mentors with K-12 students who have been affected by school closures. The goal of this virtual service is to provide a resource for students including tutoring, college preparation, and mentorship.</p>
            <p>Find out more and sign up <a href='https://www.coved.org/resources'>here</a>.</p>
        </>} />
        <Collapsible title='Khan Academy' content={<>
            <p>Pre-recorded classes</p>
            <p>Leader in free, high‐​quality, online learning content for kids to college students, Khan Academy offers no‐​cost YouTube instructional videos in a wide range of content areas, including all levels of mathematics, English language arts, science, history, computer science and programming, and SAT preparation. </p>
            <p><b>Content is aligned with state curriculum standards</b>, and parents can view and track their children’s progress. Khan Academy is widely used in schools across the country and can be a great resource for in‐​home learning.</p>
            <p>Start learning with them <a href='http://www.khanacademy.org/'>here</a></p>
        </>} />
        <Collapsible title='Scholastic Learn at Home' content={<>
            <p>Free lessons for kids Pre-K-9</p>
            <p>Start learning with them <a href='https://classroommagazines.scholastic.com/support/learnathome.html'>here</a>.</p>
        </>} />
    </>);
}

export default ChildcarePage;