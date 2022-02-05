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
        //넘기는 값을 받아서 만들어논 배열에 비교
    }
    findBoardByName(name) {
        //출력
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
        // 만들어진 게시판에 넣기
    }
    getAllArticles() {
        // 출력
    }
}

class Article {
    constructor(construction) {
        this.id = 0;
        this.createdDate = '';
        this.isExistBoard = false;
        this.comments = [];

        //null 값 처리
    }
    reply(comment) {
        // 만들어진 게시글에 넣기
    }
    getAllComments() {
        // 출력
    }
}

class Comment {
    constructor(construction) {
        //null값 처리
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
