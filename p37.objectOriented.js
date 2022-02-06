class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  get address() {
    return this._address;
  }

  get birthYear() {
    return this._birthYear;
  }

  // ①
  set birthYear(year) {
    this._birthYear = year;
  }

  set address(addr) {
    this._address = addr;
  }

  toString() {
    return `Person(${this._firstname}, ${this._lastname})`;
  }

  peopleInSameCountry(friends) {
    var result = [];
    for (let idx in friends) {
      var friend = friends[idx];
      if (this.address.country === friend.address.country) {
        result.push(friend);
      }
    }
    return result;
  }
}

/* --
①
セッターメソッドの定義はオブジェクトの変更をサポートする意図ではなく、
コンストラクタの肥大化を抑えて簡単にオブジェクトを生成する手法。
-- */

class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }

  studentsInSameCountryAndSchool(friends) {
    var closeFriends = super.peopleInSameCountry(friends);
    var result = [];
    for (let idx in closeFriends) {
      var friend = closeFriends[idx];
      if (friend.school === this.school) {
        result.push(friends);
      }
    }
    return result;
  }
}

var curry = new Student('Haskell', 'curry', '111-11-1111', 'penn state');
curry.address = new Address('US');

var turing = new Student('Alan', 'Turing', '222-22-2222', 'Princeton');
turing.address = new Address('England');

var church = new Student('Alonzo', 'Church', '333-33-3333', 'Princeton');
church.address = new Address('US');

var kleene = new Student('Stephen', 'Kleene', '444-44-4444', 'Princeton');
kleene.address = new Address('US');

church.studentsInSameCountryAndSchool([curry, turing,kleene]);