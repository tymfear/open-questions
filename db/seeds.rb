User.create email: 'tymfear@gmail.com', gitname: 'tymfear', password: 'password'
Feature.create name: 'Seeded feature', user: User.first, github_id: 1234, owner: 'Saifu', status: Feature::STATUS[:opened]
