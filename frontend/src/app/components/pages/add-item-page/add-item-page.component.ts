import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent {

	/*
	import { Request, Response } from 'express';

export const getBookInfo = async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const bookInfoUrl = `https://openlibrary.org/api/books?bibkeys=${bookId}&format=json&jscmd=data`;
  try {
    const bookInfoResponse = await fetch(bookInfoUrl);
    const bookInfoData = await bookInfoResponse.json();
    const bookInfo = bookInfoData[bookId];
    const {
        title,
        authors,
        publish_date,
        cover
    } = bookInfo;
    const author = authors[0].name;
    res.json({
      title,
      cover,
      published_date: publish_date,
      author
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
	} */
}
