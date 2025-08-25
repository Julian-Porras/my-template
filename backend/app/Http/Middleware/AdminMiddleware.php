<?php

namespace App\Http\Middleware;

use App\Enum\RoleEnum;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->user() && $request->user()->role_id == RoleEnum::ADMIN->id()) {
            return $next($request);
        }
        return response()->json(['message' => 'Access Denied'], 403);
    }
}
