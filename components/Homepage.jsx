import React, { useEffect, useState } from "react";
import Image from "next/image";

function Homepage() {
  const [image, setImage] = useState(
    "https://apod.nasa.gov/apod/image/2205/RhoLunarEclipse_Dascalu_1920.jpg",
  );
  const [imageTit, setImageTit] = useState(
    "A Deep Sky Behind an Eclipsed Moon",
  );
  const [imageExpl, setImageExpl] = useState(
    "The plan was to capture a picturesque part of the sky that was hosting an unusual guest.  The result included a bonus \u2014 an additional and unexpected guest. The beautiful background features part of the central band of our Milky Way galaxy on the far left, and the colorful clouds of Rho Ophiuchi in the image center. The unusual guest, a dimmed and reddened Moon on the right, was expected because the image was taken during last week\u2019s total lunar eclipse. The timing had to be right because the Moon \u2014 both before and after eclipse \u2014 would be so bright it would overwhelm the background.  The unexpected guest was the bright meteor across the image center. The fleeting meteor streak was captured on only one of the 10 consecutively-captured deep-field images from La Palma in the Spanish Canary Islands, while the eclipsed Moon image was taken immediately afterwards with the same camera and from the same location. The next total lunar eclipse \u2014 also quite expected \u2014 will occur in early November.    Notable Submissions to APOD: Total Lunar Eclipse of 2022 May",
  );

  const [Rimage, setRImage] = useState(
    "https://apod.nasa.gov/apod/image/2205/RhoLunarEclipse_Dascalu_1920.jpg",
  );
  const [RimageTit, setRImageTit] = useState(
    "A Deep Sky Behind an Eclipsed Moon",
  );
  const [RimageExpl, setRImageExpl] = useState(
    "The plan was to capture a picturesque part of the sky that was hosting an unusual guest.  The result included a bonus \u2014 an additional and unexpected guest. The beautiful background features part of the central band of our Milky Way galaxy on the far left, and the colorful clouds of Rho Ophiuchi in the image center. The unusual guest, a dimmed and reddened Moon on the right, was expected because the image was taken during last week\u2019s total lunar eclipse. The timing had to be right because the Moon \u2014 both before and after eclipse \u2014 would be so bright it would overwhelm the background.  The unexpected guest was the bright meteor across the image center. The fleeting meteor streak was captured on only one of the 10 consecutively-captured deep-field images from La Palma in the Spanish Canary Islands, while the eclipsed Moon image was taken immediately afterwards with the same camera and from the same location. The next total lunar eclipse \u2014 also quite expected \u2014 will occur in early November.    Notable Submissions to APOD: Total Lunar Eclipse of 2022 May",
  );

  const [uRimage, setuRImage] = useState(
    "https://apod.nasa.gov/apod/image/2205/RhoLunarEclipse_Dascalu_1920.jpg",
  );
  const [uRimageTit, setuRImageTit] = useState(
    "A Deep Sky Behind an Eclipsed Moon",
  );
  const [uRimageExpl, setuRImageExpl] = useState(
    "The plan was to capture a picturesque part of the sky that was hosting an unusual guest.  The result included a bonus \u2014 an additional and unexpected guest. The beautiful background features part of the central band of our Milky Way galaxy on the far left, and the colorful clouds of Rho Ophiuchi in the image center. The unusual guest, a dimmed and reddened Moon on the right, was expected because the image was taken during last week\u2019s total lunar eclipse. The timing had to be right because the Moon \u2014 both before and after eclipse \u2014 would be so bright it would overwhelm the background.  The unexpected guest was the bright meteor across the image center. The fleeting meteor streak was captured on only one of the 10 consecutively-captured deep-field images from La Palma in the Spanish Canary Islands, while the eclipsed Moon image was taken immediately afterwards with the same camera and from the same location. The next total lunar eclipse \u2014 also quite expected \u2014 will occur in early November.    Notable Submissions to APOD: Total Lunar Eclipse of 2022 May",
  );

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
  }
  async function getRandomImage(img, tit, expl) {
    var date = randomDate(new Date(2000, 0, 1), new Date());
    var stringDate = "";
    stringDate = stringDate + date.getFullYear() + "-";
    if (date.getMonth().toString().length + 1 < 2) {
      stringDate = stringDate + "0" + (date.getMonth() + 1);
    } else {
      stringDate = stringDate + (date.getMonth() + 1);
    }
    stringDate = stringDate + "-" + date.getDate();
    console.log(stringDate);
    await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=eIfrPRv0IskcVMySQp1zGRg2zgtN56Kie31aoolS&date=" +
        stringDate,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          img(data.url);
          tit(data.title);
          expl(data.explanation);
        }
      });
  }
  async function getTodayImage() {
    await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=eIfrPRv0IskcVMySQp1zGRg2zgtN56Kie31aoolS",
    )
      .then((response) => response.json())
      .then((data) => {
        setImage(data.url);
        setImageTit(data.title);
        setImageExpl(data.explanation);
      });
  }

  async function fetchImage() {
    await getTodayImage();
    await getRandomImage(setRImage, setRImageTit, setRImageExpl);
    await getRandomImage(setuRImage, setuRImageTit, setuRImageExpl);
  }
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <div className="flex border-b-[1px] mt-20 pl-14 pb-14">
        <div>
          <p className="text-gray-300">Image of the day</p>
          <Image
            className="select-none"
            alt={imageTit}
            src={image}
            height={500}
            width={800}
          />
          <p className="text-white font-bold text-xl">{imageTit}</p>
          <p className="text-gray-300 inline-block max-w-2xl">{imageExpl}</p>
        </div>
        <div className="w-full text-center">
          <h1 className="text-white text-5xl mb-24">
            Welcome to <span className="font-bold">Spejs</span>
          </h1>
          <Image
            className="select-none"
            alt={RimageTit}
            src={Rimage}
            height={500}
            width={1000}
          />
          <p className="text-white font-bold text-xl">{RimageTit}</p>
          <p className="text-gray-300 inline-block max-w-5xl">{RimageExpl}</p>
        </div>
      </div>

      <div className="pt-14 pl-14 flex justify-center">
        <Image
          className="select-none p-14"
          src={uRimage}
          alt={uRimageTit}
          height={500}
          width={700}
        />
        <div className="p-14 flex flex-col">
          <p className="text-white font-bold text-xl text-center">
            {uRimageTit}
          </p>
          <p className="text-gray-300 inline-block max-w-5xl">{uRimageExpl}</p>
          <button
            onClick={() =>
              getRandomImage(setuRImage, setuRImageTit, setuRImageExpl)
            }
            className="bg-white p-2 w-max self-center mt-14 select-none "
          >
            Load Another Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
//https://api.nasa.gov/planetary/apod?api_key=eIfrPRv0IskcVMySQp1zGRg2zgtN56Kie31aoolS
