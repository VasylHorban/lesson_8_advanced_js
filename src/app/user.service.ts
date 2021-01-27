import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = [
    [
      {
      avatar: 'https://image.freepik.com/free-photo/attractive-man-model-with-trendy-hairdo-beard-dressed-white-t-shirt_273609-16964.jpg',
      name: 'John',
      surname: 'Lemberg',
      phone: '+380669977121',
      email: 'lembergjone@gmai.com'
    }
  ],
    [
      {
        title: 'Technical Skills',
        description : 'JAVA, Spring, Spring Boot, SQL Server, No SQL.'
      },
      {
        title:'Education',
        description : 'Yale University, Computer Technology and Cybersecurity, 2003-2009, Master Degree'
      },
      {
        title: 'Soft Skills',
        description : 'Strong collaboration skills'

      }

    ],
    [
      {
        name : 'exchange rate calculator',
        img : 'https://www.saharaforex.com/wp-content/uploads/2019/06/travel-money-exchange-currency-exchange-forex-trading-post-office-best-holiday-money-travel-currency-exchange-rate-holiday-money-969971.jpg',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        name : 'weather forecast site',
        img : 'https://radiotrek.rv.ua/media/gallery/full/1/0/100105757_3443611099002177_734907481741852672_n1717117.jpg',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
      }
    ]

  ]
  constructor() {}
  get(index : number){
    return this.user[index];
  }
  updateUser(updateUser){
    this.user = updateUser
  }
  addProject(newProject){
    this.user[2].push(newProject)
  }

  changeAvatar(data : string){
    this.user[0][0]['avatar'] = data;
  }

  changePersonalData(data: any){
    this.user[0][0]['name'] = data.name;
    this.user[0][0]['surname'] = data.surname;
    this.user[0][0]['email'] = data.email;
  }

  changeSkills(data) {
    this.user[1] = data.slice();
  }

  getCount() : number{
    return this.user[2].length;
  }

  removeProject(id : number){
    this.user[2].splice(id, 1);
  }
  updateProject(id : number , data) {
    this.user[2][id]['name'] = data.name;
    this.user[2][id]['img'] = data.img;
    this.user[2][id]['description'] = data.description;
    console.log(this.user[2][id])
  }

}