<?php

namespace App\Enum;

enum RoleEnum 
{
    case ADMIN;
    case MODERATOR;
    case USER;
    
    public function id(): int
    {
        return match($this) {
            self::ADMIN => 1,
            self::MODERATOR => 2,
            self::USER => 3,
        };
    }

    public function label(): string
    {
        return match($this) {
            self::ADMIN => 'Admin',
            self::MODERATOR => 'Moderator',
            self::USER => 'User',
        };
    }
}
