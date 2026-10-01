<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'show-admin-panel',
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',

            'manage-users',
            'role-users',
            'show-users',
            'edit-users',
            'list-users',
            'delete-users',
            'create-users',
            'update-users',

            'orders-list',
            'orders-show',
            'orders-edit',
            'orders-delete',
            'orders-create',
            'orders-update',

            'comments-list',
            'comments-show',
            'comments-edit',
            'comments-delete',
            'comments-create',
            'comments-update',

            'categories-list',
            'categories-show',
            'categories-edit',
            'categories-delete',
            'categories-create',
            'categories-update',
            'categories-status',
            'categories-menu',

            'products-list',
            'products-show',
            'products-edit',
            'products-delete',
            'products-create',
            'products-update',
            'products-status',

            'attribute-list',
            'attribute-show',
            'attribute-edit',
            'attribute-delete',
            'attribute-create',
            'attribute-update',

            'attribute-value-list',
            'attribute-value-show',
            'attribute-value-edit',
            'attribute-value-delete',
            'attribute-value-create',
            'attribute-value-update',

            'article-list',
            'article-show',
            'article-edit',
            'article-delete',
            'article-create',
            'article-update',
            'article-status',
        ];
        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
        $user = User::create([
            'name' => 'ارما',
            'phone' => '09125918435',
            'email' => 'arma.malekii@gmail.com',
            'password' => bcrypt('123456'),
        ]);
        $role = Role::create(['name' => 'superUser']);
        $permissions = Permission::pluck('id', 'id')->all();
        $role->syncPermissions($permissions);
        $user->assignRole([$role->id]);
        $roleUser = Role::create(['name' => 'user']);
    }
}
