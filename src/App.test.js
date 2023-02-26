import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

describe('TEST APP', () => {

  test('add new image', () => {
    render(<App/>);
    const urlInput = screen.getByTestId('url-input');
    const commentInput = screen.getByTestId('comment-input');
    const addImageButton = screen.getByTestId('add-image-btn');

    expect(screen.queryByText('test comment')).toBeNull();
    fireEvent.input(urlInput, {
      target: {value: 'https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=1060&t=st=1677319156~exp=1677319756~hmac=a4727471f43cf434af574f30a61bb097e19aed1fdccadefcdc433781d3ad4e2a'}
    })
    fireEvent.input(commentInput, {
      target: {value: 'test comment'}
    })
    fireEvent.click(addImageButton);
    expect(screen.getByText('test comment')).toBeInTheDocument();
  });

  test('change comment', () => {
    render(<App/>);
    const changeCommentButton = screen.getByTestId('change-comment-btn-1');

    expect(screen.queryByTestId('textarea-1')).toBeNull();
    expect(screen.queryByText('changed comment')).toBeNull();

    fireEvent.click(changeCommentButton);

    const textArea = screen.getByTestId('textarea-1');
    expect(textArea).toBeInTheDocument();

    fireEvent.input(textArea, {
      target: {value: 'changed comment'}
    })
    fireEvent.click(changeCommentButton);

    expect(screen.getByText('changed comment')).toBeInTheDocument();
  });

  test('add and remove popUp', () => {
    render(<App/>);

    const image = screen.getByTestId('img-1');

    expect(screen.queryByTestId('popUp')).toBeNull();

    fireEvent.click(image);
    expect(screen.getByTestId('popUp')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('popUp'));
    setTimeout(() => {
      expect(screen.queryByTestId('popUp')).toBeNull();
    }, 800)
  })
})