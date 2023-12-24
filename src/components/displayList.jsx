/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function MovieBoard(props) {
  const mg = "12px";
  return (
    <div
      id={props.key}
      css={css`
        box-sizing: content-box;
        width: 500px;
        height: 250px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 40px;
      `}
    >
      <section
        css={css`
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: start;
          margin-top: 20px;
        `}
      >
        <img
          src={props.image}
          css={css`
            width: 102px;
            height: 100px;
            flex-shrink: 0;
            border-radius: 10px;
            background: url(<path-to-image>), lightgray 50% / cover no-repeat;
          `}
        ></img>
      </section>
      <section
        css={css`
          width: 231px;
          height: 211px;
          flex: 2;
          color: #181818;
          font-family: Kanit;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            margin-bottom: 10px;
          `}
        >
          Title:{props.title}
        </h1>
        <p
          css={css`
            heighy: 21px;
            margin: 0px;
            margin-top: ${mg};
          `}
        >
          Year: {props.year}
        </p>
        <p
          css={css`
            heighy: 21px;
            margin: 0px;
            margin-top: ${mg};
          `}
        >
          Runtime: {props.runtime}
        </p>
        <p
          css={css`
            heighy: 21px;
            margin: 0px;
            margin-top: ${mg};
            display: flex;
            gap: 9px;
          `}
        >
          Genres:
          {props.genres.map((currentItem) => {
            return (
              <div
                css={css`
                  width: 68px;
                  height: 27px;
                  flex-shrink: 0;
                  border-radius: 10px;
                  background: #eaac99;
                  color: #000;
                  font-family: Kanit;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 18px;
                  text-align: center;
                  padding-left: 10px;
                  padding-right: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <span>{currentItem}</span>
              </div>
            );
          })}
        </p>
        <p
          css={css`
            heighy: 21px;
            margin: 0px;
            margin-top: ${mg};
          `}
        >
          IMDB Ratings: {props.rating}
        </p>
        <p
          css={css`
            heighy: 21px;
            margin: 0px;
            margin-top: ${mg};
          `}
        >
          IMDB Votes: {props.votes}
        </p>
      </section>
    </div>
  );
}
