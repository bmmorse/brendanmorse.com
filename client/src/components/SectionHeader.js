import React from 'react';
import styled from 'styled-components/macro';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as ExternalLinkSVG } from '../Globals/svg/external-link.svg';

const DIV_FULL = styled.div`
  width: 100%;
  color: var(--text);
  display: flex;
  gap: 40px;
  align-items: baseline;

  a {
    width: 40%;
    display: flex;
    border-bottom: solid 2px #f0f0f0;
    justify-content: space-between;
    padding: 0 0 39px 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    text-transform: none;
    text-align: center;
    letter-spacing: 0.25px;
    transition: left 500ms ease, opacity 500ms ease;
    position: relative;
    left: -40px;
    opacity: 0;
    svg {
      width: 24px;
      height: 24px;
      path {
        transition: fill 300ms ease;
      }
    }

    &:hover {
      svg {
        path {
          fill: #f0f0f0;
        }
      }
    }
  }

  .text {
    width: 60%;
    gap: 24px;
    display: flex;
    flex-direction: column;

    h2 {
      opacity: 0;
      position: relative;
      bottom: 40px;
      transition: opacity 500ms ease, bottom 500ms ease;
    }

    .paragraphs {
      gap: 16px;
      column-count: 2;
      opacity: 0;
      position: relative;
      bottom: -40px;
      transition: opacity 500ms ease, bottom 500ms ease;

      p {
        width: 100%;
        &:nth-child(1) {
          margin-bottom: 24px;
        }
      }
    }
  }

  &.fade {
    a {
      opacity: 1;
      left: 0px;
    }
    .text {
      h2 {
        opacity: 1;
        bottom: 0px;
      }
      .paragraphs {
        opacity: 1;
        bottom: 0px;
      }
    }
  }

  @media (max-width: 1182px) {
    flex-direction: column;
    gap: 24px;
    width: 100%;

    a {
      width: 100%;
      padding-bottom: 16px;
    }
    .text {
      width: 100%;
    }
  }

  @media (max-width: 540px) {
    .text {
      .paragraphs {
        column-count: 1;
        flex-direction: column;
      }
    }
  }
`;

export default function SectionHeader(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    root: null,
    rootMargin: '0% 0% -20% 0%',
  });

  const DATA = {
    arkieva: {
      title: 'Arkieva',
      url: 'https://arkieva.com/',
      heading: (
        <>
          Most recently I worked as a UX/UI designer at Arkieva, where I
          designed wireframes and user flows for their upcoming SaaS product (a
          supply chain optimization solution).
        </>
      ),
      paragraphs: (
        <>
          <p>
            As one of two in-house designers, I was responsible for a majority
            of the iterative and exploratory UI work, including maintaining
            ownership over the application’s design system. By extension, I
            regularly coordinated with and presented to an array of internal
            stakeholders: the company’s CEO/leadership, developers, QA,
            marketing, etc.
          </p>
          <p>
            This role necessitated a strong embracement of compromise and
            critique. I feel ever more confident in my ability to find solutions
            admist a wide range of feedback and changing external requirements.
            The below wireframes, designed in Figma, are examples of completed
            work that I designed, presented, revised, and then ultimately handed
            off to the development team for implementation.
          </p>
        </>
      ),
    },
    doyle: {
      title: 'DoylePruitt.com',
      url: 'https://doylepruitt.com/',
      heading: (
        <>
          A brochure website that I designed and developed for a well known
          psychotherapist in upstate New York.
        </>
      ),
      paragraphs: (
        <>
          <p>
            The site is built with React, styled from scratch with all custom
            CSS (implemented via styled-components), and utilizes
            react-intersection-observer, and react-transition-group for onScroll
            animations and animated route transitions. Alongside my design work,
            I’m passionate about frontend development and bringing design
            concepts to life through code. Over the last several years I’ve
            built various side projects in both Vanilla JS and React, and have
            developed a deep understanding of and fondness for all things CSS.
          </p>
        </>
      ),
    },
    wordtrail: {
      title: 'Wordtrail.xyz',
      url: 'https://wordtrail.xyz/',
      heading: (
        <>
          A dictionary app leveraging the Oxford English Dictionary API,
          allowing you to rapidly look up a list of words without reloading the
          page.
        </>
      ),
      paragraphs: (
        <>
          <p>
            I developed this site roughly two years ago out of frustration with
            the UX of existing dictionary sites, and the general inability of
            being able to view the definitions of different words together on a
            single screen. I’m currently in the process of overhauling the
            design and implementing additional features.
          </p>
        </>
      ),
    },
    brendan: {
      title: 'BrendanMorse.com',
      url: 'https://brendanmorse.com/',
      heading: <>The very site that you’re on right now.</>,
      paragraphs: (
        <>
          <p>Custom designed and developed with React.</p>
        </>
      ),
    },
  };

  const { url, title, heading, paragraphs } = DATA[props.DATA];

  return (
    <DIV_FULL ref={ref} className={inView ? 'fade' : ''}>
      <a href={url}>
        {title}
        <ExternalLinkSVG />
      </a>

      <div className='text'>
        <h2>{heading}</h2>
        <div className='paragraphs'>{paragraphs}</div>
      </div>
    </DIV_FULL>
  );
}
