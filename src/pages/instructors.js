import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

// Styled components for the page
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #0d6efd; /* University Light Blue */
  margin-top: 20px;
`;

const InstructorList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap; /* Allows wrapping to the next line if there are too many buttons */
  justify-content: center; /* Centers the buttons horizontally */
`;

const InstructorItem = styled.li`
  margin: 10px;
`;

const InstructorButton = styled.button`
  background-color: #0d6efd; /* University Light Blue */
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f8d; /* Darker shade of blue */
  }
`;

const InstructorBio = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: justify; /* Justify text alignment */
`;

const JustifiedText = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const QuestionText = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #0d6efd; /* Color for the question text */
`;

const instructors = [
  {
    name: "Jose Alfonzo",
    bio: [
      "Jose Alfonzo hails from Lecheria, Anzoategui, Venezuela. He learned to swim when he was 4 years old while in a summer team in his county. He made the Venezuelan national team in open water for the Caribbean Games in Aruba 2018. He is especially proud of his open water crew back in Venezuela and last year's conference with LIU. His favorite swimming stroke is Freestyle. He loves to teach swimming because he loves to share his passion for the water and be able to see other people get comfortable in water. Through swimming, he has learned the value of having a routine, discipline, and perseverance.",
      "Aside from swimming, he loves programming, working out at the gym, playing/watching sports in general (like soccer), and listening to music."
    ],
    question: "If he could swim alongside any aquatic creature, real or mythical? It would be to swim alongside a Megalodon, just to chill out with him.",
    image: (
      <StaticImage
        src="../images/jose.png"
        alt="Jose Alfonzo"
        width={250}
        height={250}
        style={{ borderRadius: '50%' , marginRight: '20px'}}
      />
    ) 
  },
  {
    name: "Brynjólfur Óli Karlsson",
    bio: [
      "Benny Karlsson is from Iceland. He started learning to swim when he was around 3 or 4 years old. He learned how to swim in local pools and natural bodies of water in Iceland, with guidance from his parents and through formal swimming lessons.",
      "His biggest swimming achievement(s) is representing Iceland in international swimming competitions, winning medals at national championships, and being back-to-back conference champion at the NEC. He's swam under the Northern Lights in an outdoor pool in Iceland during the winter months and loves the feeling of being connected to nature while gliding through the water.",
      "His favorite swimming strokes are the backstroke and butterfly because of the feeling of speed and power they provide in the water. He loves teaching these strokes because they allow swimmers to experience the joy of movement and progress. He values the importance of perseverance and discipline in achieving goals, both in swimming and in life and uses them as core values in his teaching.",
      "Benny has 8 years of experience as a swim instructor and 4 years as a lifeguard, making him very effective with children in and around the pool. He delights in seeing the progress and confidence that students gain in the water, regardless of their age or skill level. By creating a supportive and positive learning environment, breaking down skills into manageable steps, and providing encouragement and reassurance, he has achieved good results with all his students.",
      "Benny is pursuing a degree in Business Management. His dream is to swim in the crystal-clear waters of the Great Barrier Reef in Australia, surrounded by vibrant marine life and stunning coral reefs. Aside from swimming, hiking in Iceland's breathtaking landscapes, photography, and reading about business and finance are his favorite pastime."
    ],
    question: "If he could swim alongside any aquatic creature, real or mythical, it would be alongside a pod of dolphins, feeling their playful energy, and experiencing a sense of connection with these intelligent and graceful creatures.",
    image: (
      <StaticImage
        src="../images/beny.png"
        alt="Brynjólfur Óli Karlsson"
        width={250}
        height={250}
        style={{ borderRadius: '50%' , marginRight: '20px'}}
      />
    ) 
  },
  {
    name: "Marcell Matyiko",
    bio: [
      "Marcell Matyiko hails from Veszprem, a little town close to a lake in Hungary. He learned to swim before he was 5 when he had his first swim lesson. His parents took him to a club close by so he could learn how to swim and join them swimming in the lake in the summer. He fell in love with the sport and has stuck with it ever since. He's been swimming for 18 years now.",
      "He is the Northeast Conference (NEC) Champion in the 200 fly, 400 IM, 400 medley relay and 800 free relay at LIU Brooklyn, and 3rd place in the Hungarian National Championship in 100 Backstroke.",
      "A favorite memory includes training in a camp while in Cyprus, a beautiful island in the Mediterranean Sea. They trained a lot but also had a really good time. Another favorite memory is seeing his teammates cheering him on after he won the 400-medley at the NEC. He says that feeling the support of your team is the greatest joy in any sport. His favorite stroke is the butterfly. It is arguably the hardest stroke of all but, in his opinion, it is also the most beautiful. When it comes to teaching a stroke, especially for beginners or little kids, the backstroke is his go-to. It is the easiest stroke to learn as a beginner and if taught properly, it gives people confidence in their own swimming abilities.",
      "As a Division I student-athlete/teacher, he believes that consistency and patience are key. After 18 long years of swimming, there are always more ways to improve on perfecting or learning a new technique. Just as he learned how to swim, every little step takes time and consistency if you want to see results. He believes in never giving up.",
      "Marcell has been a volunteer swimming instructor for the past 2 and a half years for a club in Brooklyn. He was also a part of this swimming program last year (and hopes to see some familiar faces!). Back in Hungary, he worked at numerous summer jobs with kids, including swimming and at other camps.",
      "Marcell likes to help and inspire people of all ages to challenge themselves in new ways, especially with learning how to swim. People of different ages approach swimming quite differently which makes his job a whole lot more interesting and demanding. He loves it!",
      "Part of his teaching strategy includes building a strong foundation as a first step. Being in the water is fun. If someone is scared at the beginning but then sees everyone having an amazing time in the water, it can be a big motivator. Also, when the kids are little, they feel a lot safer going into the water with their parents. The Baby & Me class is the perfect opportunity for that. But above all, patience and positive reinforcement are key.",
      "Marcell is a biology major. Understanding nature and helping to conserve it captured his imagination from a very young age. He hopes to become a researcher later in his career.",
      "His dream is to swim near a big coral reef. Being from Hungary, he doesn't often get the chance to swim in the sea.",
      "Besides swimming, he likes to read, play soccer with his friends, travel, and get to know new people in his free time."
    ],
    question: "If he could swim alongside any aquatic creature, real or mythical? It would be with sea turtles, his favorite animals. He thinks they are majestic creatures and have been around for thousands of years. True evolutionary wonders and they never seem to be in a hurry! He says they show us that one can be successful in life without having to rush all the time.",
    image: (
      <StaticImage
        src="../images/Marcell.png"
        alt="Marcell Matyiko"
        width={250}
        height={250}
        style={{ borderRadius: '50%' , marginRight: '20px'}}
      />
    ) // Use the imported image
  },
  {
    name: "Caitlin Rappaport",
    bio: [
      "Caitlin Rappaport is originally a New York native from the town of Merrick on Long Island. At the age of 16, she relocated with her family to Gilbert, Arizona.",
      "She's been swimming since she was very young (2 years old). Her parents introduced her to the pool at the age of 2, and from there, she excelled in the sport. She began her journey in club swimming with the Long Island Express and continued her career when she moved to Arizona, joining the Mesa Aquatics Club.",
      "At 15 years old, her most significant swimming accomplishment was qualifying for the New York State Swimming and Diving Championship in the 100 breaststroke, proudly representing the Bellmore-Merrick Sharks. Upon relocating to Arizona, she competed for Gilbert Classical Academy High School, where she not only shattered but still hold records in the 200 free, 50 free, and 100 breast events. Transitioning into collegiate swimming at Long Island University, she achieved personal best times in the 100 and 200 breaststroke, along with the 50 free. Additionally, she was honored to be included in the NEC Spring Commissioners Honor Roll and Winter/Spring Academic Honor Roll for her academic achievements.",
      "One of her best memories from swimming happened at the Northeastern championship meet. She swam her fastest ever in the 100 breaststroke, which made her really happy. What made it even better was having her friends and coaches there to cheer her on. Their support turned a great moment into something really special.",
      "Her favorite stroke is breaststroke, and she loves swimming and teaching because it allows her to connect with the water in a way that's both meditative and exhilarating. Swimming gives her a sense of freedom and weightlessness that she can't find anywhere else. As a Division I student athlete, one valuable lesson from her swimming career that she brings into her teaching is the importance of perseverance. In swimming, success often comes from consistent practice, dedication, and pushing through challenges. She emphasizes to her students that improvement takes time and effort, but with persistence and a positive mindset, they can achieve their goals in the pool and beyond.",
      "She is one of 7 kids, so growing up as the 2nd oldest, she has accumulated a wealth of experience in taking care of younger children. From changing diapers to organizing activities, she's been there every step of the way. Additionally, she's had the opportunity to teach children how to swim in the past. It's been a fulfilling experience witnessing their progress and instilling in them a love for the water while ensuring their safety.",
      "Working with kids around the pool has taught her patience, communication skills, and the importance of creating a positive and supportive environment for learning. Teaching others how to swim is incredibly rewarding; it's a joy to see the progress and confidence that her students gain in the water. Being able to share her passion for swimming and help others overcome their fears or improve their technique brings her immense satisfaction.",
      "Building trust and confidence is key. She starts by creating a supportive and relaxed environment, reassuring them that it's okay to feel nervous. She gradually introduces them to the water, starting with simple activities and ensuring they feel safe every step of the way. Encouragement, praise for small achievements, and focusing on fun rather than fear help alleviate their apprehension and build a positive association with swimming.",
      "She chose to receive her Bachelor of Science in Nursing because she's always had a deep-seated passion for serving people, especially children. Recently, she accepted a job offer to work in the Neonatal Intensive Care Unit (NICU), where she'll be able to channel her love for babies into providing critical care and support during their earliest stages of life. It's incredibly fulfilling to know that she'll be making a difference in the lives of these vulnerable little ones and their families.",
      "Swimming along the Amalfi Coast in Italy sounds like a dream! The azure waters, rugged coastline, and picturesque villages create a truly enchanting setting for a swim. And the thought of enjoying a plate of delicious pasta afterward is just the cherry on top.",
      "Outside of swimming, she's passionate about her work as a NICU nurse, providing critical care and support to newborns and their families. In her free time, she enjoys staying active through various activities like running, lifting weights, and of course, swimming. Additionally, she cherishes being a dog mom to her husky mix named Kingdom."
    ],
    question: "If she could swim alongside any aquatic creature, real or mythical? She would love to swim alongside manta rays in Hawaii! These graceful creatures are known for their gentle nature and majestic presence in the ocean. They glide effortlessly through the water, their wings undulating like giant birds of the sea. Being in their presence would offer a glimpse into the serene beauty of marine life, and the clear waters of Hawaii provide the perfect backdrop for such an unforgettable encounter.",
    image: (
      <StaticImage
        src="../images/Caitlin.png"
        alt="Caitlin Rappaport"
        width={250}
        height={250}
        style={{ borderRadius: '50%' , marginRight: '20px'}}
      />
    ) 
  },
  {
    name: "Kate Hinrichs",
    bio: [
      "Kate Hinrichs is from South Africa. Kate began swimming at 2 years old when she learned how to swim from a swim school and her parents. She won a few medals when she swam with her high school team, but she is a water polo player and has represented her country in water polo multiple times.",
      "Her favorite memory of swimming is at Christmas time while playing and messing around in the water with her brothers. She loves freestyle and butterfly, the strokes she swam when she competed. She loves how fast and powerful she feels while swimming them. She also loves to teach swimming because it allows kids to experience how fun water sports can be while being safe.",
      "As a Division 1 student-athlete, she has learnt the importance of never giving up. If you keep pushing and working hard you are bound to achieve great things. She wants to create passion for the sport in everyone she teaches. She has worked with children in school and taught them many different types of sports and play activities. She has also coached swimming and water polo to toddlers and teenagers. Her experience also includes babysitting and lifeguarding for 4 years.",
      "The most important/rewarding part of teaching is that the children are having fun, enjoying swimming and are becoming water-safe.",
      "She encourages students who might be nervous or hesitant about getting into the water by sitting with them, talking to them and showing them how fun water can be. It is okay to go slow at first to build trust.",
      "Kate is studying Physical therapy because she loves working with people and helping them get better so they can achieve their goals in life again! Her dream swim location is the pool used at the aquatic world championship in South Korea because she would love to experience that atmosphere again.",
      "Aside from swimming, she loves to read, ride her bicycle and scuba dive."
    ],
    question: "If she could swim alongside any aquatic creature, real or mythical? She would love to swim with dolphins and turtles, her favorite sea creatures.",
    image: (
      <StaticImage
        src="../images/Kate.png"
        alt="Kate Hinrichs"
        width={250}
        height={250}
        style={{ borderRadius: '50%', marginRight: '20px' }}
      />
    ) 
  },
  {
    name: "Charlotte Jones",
    bio: [
      "Charlotte Jones is from Pittsburgh, Pennsylvania. She first began swimming at 3 years old when she had her first swim lesson at Plum Aqua, a local summer swim club in her hometown where she did a learn-to-swim program run by high school students.",
      "She is very proud of being a Division 1 Swimmer. Also, qualifying for sectionals for the first time on her club team is a favorite memory. The excitement from everyone was unforgettable.",
      "She loves swimming/teaching backstroke because it can be so effortless and beautiful when it’s swam. As a Division 1 student-athlete, she wants to make sure that all the kids genuinely enjoy swimming. She thinks that is the most important aspect of swimming: if you’re not having fun then you’re doing something wrong.",
      "Charlotte has taught lessons since she was 13 and has been a coach since she was 16. She has coached kids ages 5-18, as well as master swimmers ages 18-90. She’s also been a lifeguard for 6 years.",
      "Teaching everyone from 3 to 90 has allowed her to become comfortable with talking to anyone at any stage of life. She has learned something from everyone she has worked with, and it’s been super rewarding to get to know so many people.",
      "Being able to swim is one of the most freeing things you can do, and an incredibly important life skill. She likes to remind people who are nervous or hesitant that they are conquering something every time they take that leap and get into the water.",
      "Charlotte studies political science and international relations because she wants to go to law school. She chose those majors because they are the most straightforward path to law school and they are interesting to her.",
      "One day, she hopes to swim in the Bondi Icebergs pool in Australia. The waves from the ocean come up and over the walls into the pool, and the pool has stunning views.",
      "Outside of swimming, she runs the Honors College Student Council at LIU. She also works for World Information Transfer, a not-for-profit at the United Nations. In her spare time, she loves to read and go on long walks."
    ],
    question: "If she could swim alongside any aquatic creature, real or mythical? Swimming with a manta ray would be a dream come true. Manta rays are some of the biggest ocean animals, and she thinks it would be so cool to swim alongside one.",
    image: (
      <StaticImage
        src="../images/charlotte.png"
        alt="Charlotte Jones"
        width={250}
        height={250}
        style={{ borderRadius: '50%', marginRight: '20px' }}
      />
    ) 
  },
  {
    name: "Charlie Wallace ",
    bio: [
      "Charlie Wallace hails from Cincinnati, Ohio, where his mother taught him how to swim at the age of 4. His proudest swimming achievements are getting his varsity letter in the 200-meter individual medley, and breaking 30s on his 100-meter breaststroke split. He loves the breaststroke because it’s technique-oriented and very different from all the other strokes.",
      "As a Division 1 student-athlete, he’s learned the value of building a strong culture in a group, and building a team that supports each other. His experience includes being a coach, lifeguard, after-school tutor, music teacher and Big Brother in the Big Brothers program.",
      "He thinks it’s really interesting to see how everybody has different goals. For some, it’s really scary and hard to just put their head underwater, some want to learn how to do a flip turn, and others are trying to work on pace in the 500. He also thinks it's awesome to see how the younger groups look up to and can be inspired by the older groups.",
      "He encourages hesitant swimmers by taking baby steps; by breaking down the process of getting into the water into as many small steps as possible so that each step becomes less and less scary.",
      "Charlie is studying Political Science and International Relations because he loves to talk to people and loves to learn about people who are different from him. He’d love to travel and meet people in his career.",
      "One day, Charlie hopes to swim between the Straits of Gibraltar. He thinks it would be really beautiful, and it would be really cool to do a “cross-continental” swim.",
      "Outside of swimming, he plays guitar, piano, bass, and saxophone. He does some studio gigs, some live gigs, and teaches lessons. Making music is one of his main passions."
    ],
    question: "If he could swim alongside any aquatic creature, real or mythical? Charlie thinks it would be really cool to swim next to a whale. Just the scale and size would be really impressive.",
    image: (
      <StaticImage
        src="../images/Charlie.png"
        alt="Charlie Wallace"
        width={250}
        height={250}
        style={{ borderRadius: '50%', marginRight: '20px' }}
      />
    ) // Use the imported image
  },
  {
    name: "Vanja Petrasinovic",
    bio: [
      "Vanja Petrasinovic is from Kraljevo, Serbia, and learned to swim at 8 years old while taking swim lessons. One of his greatest swimming achievements includes doing a 4-hour long swim session. He loves doing relaxing laps after finishing a hard workout.",
      "His favorite swimming stroke is the front crawl, his fastest! As a Division 1 student-athlete, he values discipline and efficiency. Vanja was a swim instructor during his freshman year in Chicago. He also did swim camps and helped coach the water polo team. He loves seeing kids’ progress over time.",
      "He encourages timid swimmers by making sure that they can feel safe and secure around him. Vanja is studying Marketing. He has always been good with social skills and interacting with people in general and believes that marketing can enhance those abilities even more.",
      "One day he hopes to swim in Bora Bora, because it is beautiful. Aside from swimming, he plays volleyball, has an immense love for dogs, and enjoys any kind of art."
    ],
    question: "If he could swim alongside any aquatic creature, real or mythical? If the chance arises, he would love to swim with dolphins because they make him feel safe.",
    image: (
      <StaticImage
        src="../images/Vanja.png"
        alt="Vanja Petrasinovic"
        width={250}
        height={250}
        style={{ borderRadius: '50%', marginRight: '20px' }}
      />
    )
  },

];

const InstructorsPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  return (
    <Layout>
      <SEO title="Meet Our Instructors" />
      <Title>Meet Our Instructors</Title>
      <InstructorList>
        {instructors.map((instructor, index) => (
          <InstructorItem key={index}>
            <InstructorButton onClick={() => handleInstructorClick(instructor)}>
              {instructor.name}
            </InstructorButton>
          </InstructorItem>
        ))}
      </InstructorList>
      {selectedInstructor && (
        <InstructorBio>
          {selectedInstructor.image}
          <h2>{selectedInstructor.name}</h2>
          {selectedInstructor.bio.map((paragraph, index) => (
            <JustifiedText key={index}>{paragraph}</JustifiedText>
          ))}
          <QuestionText><strong>Question:</strong> {selectedInstructor.question}</QuestionText>
        </InstructorBio>
      )}
    </Layout>
  );
};

export default InstructorsPage;
