function showContent(section) {
    let content = '';
    switch(section) {
        case 'about':
            content = `<h2>About Us</h2>
                       <p>Rajalakshmi Engineering College, an autonomous institution affiliated to Anna University, Chennai, was established in the year 1997 under the aegis of Rajalakshmi Educational Trust whose members have had consummate experience in the fields of education and industry. The College has grown from strength to strength in the last 25 years and progressing towards Excellence in Engineering Education, Research and Development.</p>
                       <p>Started with 3 Under Graduate programmes in Engineering with an annual intake of 180 students in 1997, the College presently offers 18 Under Graduate and 9 Post Graduate programmes including MBA program, with an annual intake of 2070 students. The approval of AICTE and affiliation of the Anna University for such a progressive intake is a standing testimony for the continuous growth of the college over the years. 9 of our departments are recognized as Research Centers of Anna University to conduct Ph.D. and M.S. (By Research) programmes and many scholars have obtained Ph.D. through these research centres.</p>`;
            break;
        case 'departments':
            content = `<h2>Engineering Departments</h2>
                       <ul>
                           <li>Computer Science and Engineering</li>
                           <li>Information Technology</li>
                           <li>Electronics and Communication Engineering</li>
                           <li>Electrical and Electronics Engineering</li>
                           <li>Mechanical Engineering</li>
                           <li>Civil Engineering</li>
                           <li>Biomedical Engineering</li>
                           <li>Automobile Engineering</li>
                           <li>Aeronautical Engineering</li>
                           <li>Biotechnology</li>
                           <li>Chemical Engineering</li>
                           <li>Instrumentation and Control Engineering</li>
                           <li>Artificial Intelligence and Data Science</li>
                           <li>Mechatronics Engineering</li>
                           <li>Robotics and Automation</li>
                       </ul>`;
            break;
        case 'academics':
            content = `<h2>Academics</h2>
                       <p>Our academic schedule is meticulously planned to ensure that students gain a strong theoretical foundation coupled with practical skills. The curriculum is regularly updated to keep pace with the latest advancements in technology and industry requirements. We offer a variety of courses, electives, and projects that encourage innovation and research among students. The college also hosts numerous workshops, seminars, and guest lectures by industry experts to provide students with real-world insights and experiences.</p>`;
            break;
        case 'admissions':
            content = `<h2>Admissions</h2>
                       <p>Admissions to Rajalakshmi Engineering College are conducted based on merit and through counseling conducted by Anna University. Prospective students need to meet the eligibility criteria specified by the university and appear for the necessary entrance examinations. Detailed information about the admission process, important dates, and required documents can be found on the college’s official website. The college offers various scholarships and financial aid options to support deserving students.</p>`;
            break;
        default:
            content = '<h2>Welcome</h2><p>Select a section to learn more about our college.</p>';
    }
    document.getElementById('content').innerHTML = content;
}
