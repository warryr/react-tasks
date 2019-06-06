import React from 'react';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import aboutAgile from '../../img/about-agile.svg';
import aboutExpertise from '../../img/about-expertise.svg';
import aboutLearning from '../../img/about-learning.svg';
import aboutPositive from '../../img/about-positive.svg';
import aboutTechnologies from '../../img/about-technologies.svg';
import Typography from '@material-ui/core/Typography';

const About = () => {
  const classes = useStyles();
  return (
    <Container fixed>
      <Typography component='h1' variant='h4' className={classes.h4}>
        Преимущества iTechArt
      </Typography>
      <Box className={classes.containerBox}>
        <Box component='div' className={classes.contentBox}>
          <img src={aboutAgile} alt='About agile' className={classes.image}/>
          <Typography component='p' variant='h6' className={classes.paragraph}>
            Мы придерживаемся гибкого подхода как в менеджменте, так и в реализации новых идей
          </Typography>
        </Box>
        <Box component='div' className={classes.contentBox}>
          <img src={aboutExpertise} alt='About expertise' className={classes.image}/>
          <Typography component='p' variant='h6' className={classes.paragraph}>
            У нас работают Remarkable People – высококлассные специалисты с глубокой технической экспертизой
          </Typography>
        </Box>
        <Box component='div' className={classes.contentBox}>
          <img src={aboutLearning} alt='About learning' className={classes.image}/>
          <Typography component='p' variant='h6' className={classes.paragraph}>
            Мы, как и наши западные заказчики, предпочитаем новые технологии
          </Typography>
        </Box>
        <Box component='div' className={classes.contentBox}>
          <img src={aboutPositive} alt='About positive' className={classes.image}/>
          <Typography component='p' variant='h6' className={classes.paragraph}>
            Мы любим учиться и делиться своими знаниями
          </Typography>
        </Box>
        <Box component='div' className={classes.contentBox}>
          <img src={aboutTechnologies} alt='About technologies' className={classes.image}/>
          <Typography component='p' variant='h6' className={classes.paragraph}>
            У нас в компании доброжелательная и творческая атмосфера
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;