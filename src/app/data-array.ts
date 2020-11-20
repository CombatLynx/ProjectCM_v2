import { Group} from './interfaces/group.interfaces';
import { Song} from './interfaces/song.interfaces';

export const GROUPS: Group[] = [
  { id: 1, name: 'Metallica'},
  { id: 2, name: 'Queen'},
  { id: 3, name: 'Kiss'},
  { id: 4, name: 'Led Zeppelin'},
  { id: 5, name: 'AC/DC'},
  { id: 6, name: 'Marilyn Manson'},
  { id: 7, name: 'Judas Priest'},
  { id: 8, name: 'Scorpions'},
  { id: 9, name: 'Nirvana'},
  { id: 10, name: 'Linkin Park'},
  { id: 11, name: 'ABBA'}
];

export const SONGS: Song[] = [
  { id: 1, name: 'Nothing else matters', url: './assets/songs/Metallica/Nothing_Else_Matters.mp3', groupId: 1 },
  { id: 2, name: 'Enter Sandman', url: './assets/songs/Metallica/Enter_Sandman.mp3', groupId: 1 },
  { id: 3, name: 'The Unforgiven', url: './assets/songs/Metallica/The_Unforgiven.mp3', groupId: 1 },

  { id: 4, name: 'Another one bites the dust', url: './assets/songs/Queen/Another_One_Bites_The_Dust.mp3', groupId: 2 },
  { id: 5, name: 'Bohemian rhapsody', url: './assets/songs/Queen/Bohemian_Rhapsody.mp3', groupId: 2 },
  { id: 6, name: 'The show must go on', url: './assets/songs/Queen/The_Show_Must_Go_On.mp3', groupId: 2 },

  { id: 7, name: 'Detroit rock city', url: './assets/songs/Kiss/Detroit_Rock_City.mp3', groupId: 3 },
  { id: 8, name: 'I was made for love in you', url: './assets/songs/Kiss/I_Was_Made_For_Lovin_You.mp3', groupId: 3 },
  { id: 9, name: 'Rock and roll all nite', url: './assets/songs/Kiss/Rock_And_Roll_All_Nite.mp3', groupId: 3 },

  { id: 10, name: 'Immigrant song', url: './assets/songs/Led__Zeppelin/Immigrant_Song.mp3', groupId: 4 },
  { id: 11, name: 'Stairway to heaven', url: './assets/songs/Led__Zeppelin/Stairway_To_Heaven.mp3', groupId: 4 },
  { id: 12, name: 'Whole lotta love', url: './assets/songs/Led__Zeppelin/Whole_Lotta_Love.mp3', groupId: 4 },

  { id: 13, name: 'Back in black', url: './assets/songs/AC__DC/Back_In_Black.mp3', groupId: 5 },
  { id: 14, name: 'Shot in the dark', url: './assets/songs/AC__DC/Shot_In_The_Dark.mp3', groupId: 5 },
  { id: 15, name: 'Thunderstruck', url: './assets/songs/AC__DC/Thunderstruck.mp3', groupId: 5 },

  { id: 16, name: 'Killing strangers', url: './assets/songs/Marilyn__Manson/Killing_Strangers.mp3', groupId: 6 },
  { id: 17, name: 'Rock is dead', url: './assets/songs/Marilyn__Manson/Rock_Is_Dead.mp3', groupId: 6 },
  { id: 18, name: 'Sweet dreams', url: './assets/songs/Marilyn__Manson/Sweet_Dreams.mp3', groupId: 6 },

  { id: 19, name: 'Breaking the law', url: './assets/songs/Judas__Priest/Breaking_the_Law.mp3', groupId: 7 },
  { id: 20, name: 'Painkiller', url: './assets/songs/Judas__Priest/Painkiller.mp3', groupId: 7 },
  { id: 21, name: 'Prisoner of your eyes', url: './assets/songs/Judas__Priest/Prisoner_of_Your_Eyes.mp3', groupId: 7 },

  { id: 22, name: 'Rock you like a hurricane', url: './assets/songs/Scorpions/Rock_You_Like_A_Hurricane.mp3', groupId: 8 },
  { id: 23, name: 'Send me an angel', url: './assets/songs/Scorpions/Send_Me_An_Angel.mp3', groupId: 8 },
  { id: 24, name: 'Still loving you', url: './assets/songs/Scorpions/Still_Loving_You.mp3', groupId: 8 },

  { id: 25, name: 'Come as you are', url: './assets/songs/Nirvana/Come_As_You_Are.mp3', groupId: 9 },
  { id: 26, name: 'Rape me', url: './assets/songs/Nirvana/Rape_Me.mp3', groupId: 9 },
  { id: 27, name: 'Smells like teen spirit', url: './assets/songs/Nirvana/Smells_Like_Teen_Spirit.mp3', groupId: 9 },

  { id: 28, name: 'Faint', url: './assets/songs/Linkin__Park/Faint.mp3', groupId: 10 },
  { id: 29, name: 'In the end', url: './assets/songs/Linkin__Park/In_The_End.mp3', groupId: 10 },
  { id: 30, name: 'Numb', url: './assets/songs/Linkin__Park/Numb.mp3', groupId: 10 },

  { id: 31, name: 'Dance', url: './assets/songs/ABBA/ABBA__Dance.mp3', groupId: 11 },
  { id: 32, name: 'Gimme', url: './assets/songs/ABBA/ABBA__Gimme.mp3', groupId: 11 },
  { id: 33, name: 'Happy new year', url: './assets/songs/ABBA/ABBA__HappyNewYear.mp3', groupId: 11 },
  { id: 34, name: 'Money', url: './assets/songs/ABBA/ABBA__Money.mp3', groupId: 11 },
];
