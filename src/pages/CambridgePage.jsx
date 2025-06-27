import Navbar from "../components/common/navigation/Navbar"
import cambridge from "../assets/cambridge.jpg"
import Footer from "../components/common/Footer"
const CambridgePage = () => {
  return (
    <>
          <Navbar />
          <div className="cambridge-page">
                   <div className="inner-row">
                            <div className="cambridge-page-content">
                                     <h1>Cambridge System</h1>

                                     <p>At Moi Educational Centre, our Cambridge program offers learners access to an internationally recognized curriculum that emphasizes inquiry, critical thinking, and global awareness. With an academic year running from September to June, the program provides a dynamic and well-rounded learning experience tailored to prepare students for success in a rapidly evolving world.</p>
                                     <p>Learners benefit from a structured yet flexible academic journey, engaging in diverse subjects such as:</p>
                                     <ul>
                                              <li>English</li>
                                              <li>Mathematics</li>
                                              <li>Science</li>
                                              <li>Arts & Design</li>
                                              <li>Languages</li>
                                     </ul>
                                     <p>The curriculum nurtures academic excellence, research skills, and global competence, encouraging students to take ownership of their learning while developing a growth mindset.</p>

                                     <img src={cambridge} alt="" />

                                     <h2>Cambridge Key Stages at Moi Educational Centre</h2>

                                     <h3>Key Stage 1: Year 1 and Year 2</h3>
                                     <p>This marks the beginning of formal education, with a strong focus on curiosity, social development, and foundational skills in literacy and numeracy. Learners explore their environment through nature-based learning, storytelling, and play, developing early reasoning, conflict resolution, and interpersonal skills.</p>
                                     <p>At Moi Educational Centre, we currently offer Year 1 and Year 2 in well-equipped, child-friendly spaces that support holistic development.</p>
                                     <h3>Key Stage 2: Year 3 and Year 4</h3>
                                     <p>At this stage, learners begin to understand themselves as students. They are introduced to basic research skills, guided discovery, and problem-solving through creative thinking. Confidence and independence are nurtured through personal projects and early public speaking opportunities. By the end of this phase, learners demostrate greater responsibility and a clear academic identity.</p>
                                     <h3>Key Stage 3 (Middle School): Year 7 to Year 9</h3>
                                     <p>Learners explore a broader curriculum and begin identifying their academic interests and personal strengths. With the support of guidance and counselling, they receive help in clarifying goals and values. Emphasis is placed on teamwork, critical thinking, and effective communication, preparing them for subject specialization and long-term planning.</p>

                                     <h3>Senior High School: Year 10 to year 12</h3>
                                     <p>This is the final stage of the Cambridge journey, where learners specialize in subjects aligned with their academic and career aspirations. The focus is on preparing for international examinations, university admission, and real-world leadership. Students are guided to set personal goals, manage projects, and actively participate in co-curricular and community-based initiatives that strengthen character and resilience.</p>
                                     <p>At Moi Educational Centre, our Cambridge learners enjoy seamless progression across the stages. Through interactive and inquiry-based instruction, we cultivate well-rounded individuals equipped with global perspectives, analytical skills, and academic confidence, ready to excel anywhere in the world.</p>
                            </div>
                   </div>
          </div>

          <Footer />
    </>
  )
}

export default CambridgePage