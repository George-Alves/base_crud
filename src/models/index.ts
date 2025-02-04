import { User } from './User';
import { Episode } from './Episodes';
import { Category } from './Category'
import { Course } from './Course'

Category.hasMany(Course, { as: 'courses' })


Course.belongsTo(Category)
Course.hasMany(Episode, { as: 'episodes' })


export {
  Course,
  Category,
  Episode,
  User
}