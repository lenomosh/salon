<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::truncate();
        $faker = \Faker\Factory::create();
        \App\User::create([
            'name'=>'John Does',
            'email'=>'admin@admin.com',
            'password'=>bcrypt('secret'),
            'user_type_id'=>1

        ]);

        foreach(range(1,10) as $i){
            \App\User::create([
                'name'=> $faker->name,
                'email'=>$faker->email,
                'password'=>bcrypt('secret'),
                 'user_type_id'=>random_int(1,12)
                ]
            );
        }
    }
}
