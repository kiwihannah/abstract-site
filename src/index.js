/**
 * site     :
 * (constructor) boards[]
 * (function) addBoard(board), findBoardByName(board.name),
 * board    :
 * (constructor) arcitcles[], names[], isDupName * 추가 여부 필드 설정
 * (function) publish(article)
 * article  :
 * (constructor) comments[], id (javascript 내장함수 써야되서 fix), subject, content, author, isExistBoard * 추가 여부 필드 설정
 * (function) reply(comment), getAllComments()
 * comment  :
 * (constructor) contents[], author
 */

class Site {
    constructor() {
        this.boards = [];
    }
    addBoard(board) {
        let names = [];
        for (let b of this.boards) {
            names.push(b.name);
        }
        if (!names.includes(board.name)) {
            board.isDupName = false;
            this.boards.push(board);
        } else {
            throw new Error('게시판 이름 같아서 안돼');
        }
    }
    findBoardByName(name) {
        for (let b of this.boards) {
            if (b['name'] === name) return b;
        }
    }
}

class Board {
    constructor(name) {
        this.isDupName = true; // 사용가능 게시판 기준
        this.articles = [];
        this.name = name;

        if (!name) throw new Error('null값 안돼');
    }
    publish(article) {
        if (!this.isDupName) {
            article.id = `${this.name}-${Math.random()}`;
            console.log(article);
            article.createdDate = new Date().toISOString(); // ISO 8601 -> 2022-10-09T24:30:30.000Z
            article.isExistBoard = true; // 사용가능 게시글 기준
            this.articles.push(article);
        } else throw new Error('없는 게시판이라 안돼');
    }
    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(construction) {
        this.id = 0;
        this.createdDate = '';
        this.isExistBoard = false;
        this.comments = [];

        if (construction['subject'] && construction['content'] && construction['author'])
            this.construction = construction;
        else throw new Error('subject, content, author null값 안돼');
    }
    reply(comment) {
        if (this.isExistBoard) {
            comment.createdDate = new Date().toISOString();
            this.comments.push(comment);
        } else throw new Error('추가 안된 게시글엔 댓글 못달아');
    }
    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(construction) {
        if (construction['content'] && construction['author']) this.construction = construction;
        else throw new Error('content, author null값 안돼');
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
