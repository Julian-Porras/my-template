<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function findUserById($user_id)
    {
        return User::find($user_id);
    }
    
    public function updateUserById($user_id, array $data)
    {
        $user = User::find($user_id);
        // $this->authorize('update', $user);
        return $user->update($data);
    }
}
