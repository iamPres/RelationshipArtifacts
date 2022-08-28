import logo from './logo.svg';
import { useEffect, useState } from "react"
import { ReactComponent as Heart } from "./heart.svg"
import './App.css';
import { Box, Grid, ButtonBase, Modal, ModalProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BlurryModal = styled(Modal)(({ theme }) => ({
  backdropFilter: "blur(5px)",
}));

function App() {
  const [openedItem, setOpenedItem] = useState(-1)
  const [items, setItems] = useState([
    {
      title: "Four of Desolation",
      content: "Look how cute we are! This was one of the only good photos George took of us, and I think you look beautiful (and badass). My parents saw this and became obsessed with you, for good reason. You are so adventurous and fearless, Val. I admire your courage, strength, and beauty.",
      clicked: false,
      image: "Image-1.jpg"
    },
    {
      title: "Six of Kebins",
      content: "Hey look! It's our son Kebin! I will never forget the day we were gifted with the most precious bulbasaur. It was so cute watching you hold him all day in your romper and Hawaii hat! It reminds me how unapolagetic you are to be yourself, and how inspiring your authenticity is. Keep being you, Val, and dont let anyone tell you otherwise!",
      clicked: false,
      image: "Image-2.JPG"
    },
    {
      title: "One of Sand",
      content: "Wow! We look good in this one. After staying up late cuddling on rocks, we made it to the arch and it felt so good! Words cannot describe how to felt to sit next to you in that moment. Our love of the outdoors created such an intimate and special bond between us, and I just can't wait to explore and travel with you, Val. You're my best friend!",
      clicked: false,
      image: "Image-3.jpg"
    },
    {
      title: "Eight of Kisses",
      content: "One of my favorite pictures of us! Watching the sunset with you and Bonnie in Greenville was a highlight for me. When I look at this picture, it reminds me that I am a huge part of your life! Meeting your friends and family was so rewarding, because I love experiencing the things that are important to you, with you! Being able to share your sense of home was an experience beyond words. You are so interesting and unique!",
      clicked: false,
      image: "Image-4.jpg"
    },
    {
      title: "Twelve of Whisky",
      content: "Damn, we were drunk! You are so easy to have fun with, Val. You make me feel like myself in every way and bring out the best in me! It means so much to me that we can enjoy nights in and nights out. It all feels so natural because we're so good together, and theres no one in the world I'd rather spend time with. I LOVE YOU SO MUCH!!!",
      clicked: false,
      image: "Image-5.jpg"
    },
    {
      title: "Nine of Leaving",
      content: "This image was taken a few moments before our first period of long-distance. Although it's daunting, I feel fearless when I'm with you. Your emotional strength inspires me and motivates me to be secure in myself and in us, even in challenging times.",
      clicked: false,
      image: "Image-10.jpg"
    },
    {
      title: "Two of Passion",
      content: "A pic of us and Kebin! Our trip to Carowinds was so special to me. Not only did I ride my first roller coaster but I got to experience the greenhouse effect first-hand in the parking lot! Every time I experience something new with you, it feels like a new part of our relationship has been unlocked. Your open-mindedness is so special to me, and it reminds me that I'll never be judged. Here's to many more scary firsts with you!",
      clicked: false,
      image: "Image-7.jpg"
    },
    {
      title: "Eleven of Triumph",
      content: "If our relationship had a cover image, this would be it. Look how cute you look with your pigtails! The scenery is nice, but all I can see is how happy we are to be together. I genuinely feel the spark with you, Val. Everytime I look into your eyes, hear your voice, or see your single-dimpled smile, I feel so many butterflies! Every time we kiss, it feels like the very first time, and every time I say 'I love you' I mean it just as much.",
      clicked: false,
      image: "Image-8.jpg"
    },
    {
      title: "Three of Affection",
      content: "",
      clicked: false,
      image: "Image-9.jpg"
    },
  ])

  return (
    <div className="App" style={{ backgroundColor: "#FFE2E4", width: "100%", height: "100%", paddingTop: 20 }}>
      <Box sx={{ fontSize: 48, fontWeight: "light" }}>Some artifacts of our relationship</Box>
      <Box mt={1} sx={{ fontSize: 24, fontWeight: "light" }}>For Valentina</Box>
      <Box mt={5} width="100%" height="100%" display="flex" flexDirection="column" style={{ justifyContent: "center", alignItems: "center" }}>
        <Box mb={5} display="flex" width="80%">
          <Grid container spacing={2}>
            {items.map((value, index) => {
              return (
                <Grid item xs={4}>
                  <Item>
                    <ButtonBase onClick={() => {
                      let tmp = [...items]
                      tmp[index].clicked = true
                      setItems([...tmp])
                      setOpenedItem(index)
                    }} sx={{ width: 256, height: 256 }}>
                      {value.clicked ? <img style={{ maxHeight: "90%" }} alt={value.content} src={value.image} /> :
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            version="1.1" height="315" width="342" >
                            <defs>
                              <style type="text/css"></style>
                              <g id="heart">
                                <path
                                  d="M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z" />
                              </g>
                            </defs>
                            <use href="#heart" fill="#FFE2E4" transform="rotate(225,150,121) scale(0.5) translate(180, 60)" />
                            <rect width="800" height="60" fill="#FFE2E4" transform="translate(0, 100)" />
                            <text font-weight="bold" fill="white" font-size="25px" transform="translate(20, 137.5)">{value.title}</text>
                          </svg>
                        </>}
                    </ButtonBase>
                  </Item>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <BlurryModal
          open={openedItem != -1}
          onClose={() => { setOpenedItem(-1) }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {openedItem != -1 ?
            <Box width="45%" height="100%" display="flex" flexDirection="column">
              <Box width="100%" pt="5%" pl="5%" display="flex">
                <img style={{ maxWidth: "100%" }} src={items[openedItem].image}></img>
              </Box>
              <Box width="200%" display="flex" pl="5%" mt={5} sx={{ color: "white", fontSize: 36, fontWeight: "light" }}>
                {items[openedItem].content}
              </Box>
            </Box>
            : <></>
          }
        </BlurryModal>
      </Box >
    </div >
  );
}

export default App;
