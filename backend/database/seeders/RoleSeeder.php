<?php

namespace Database\Seeders;

use App\Enum\RoleEnum;
use App\Models\RoleModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        foreach (RoleEnum::cases() as $role) {
            RoleModel::insert([
                'id'        => $role->id(),
                'role_name' => $role->label(),
            ]);
        }
    }
}
